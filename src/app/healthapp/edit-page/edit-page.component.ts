import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {PatientsService} from '../overall/services/patients.service';
import {Patient} from '../overall/models/patient.model';

@Component({
  selector: 'ido-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  @Output() updatedPatient = new EventEmitter<Patient>();
  @Output() deletedPatient = new EventEmitter<Patient>();

  editForm: FormGroup;
  public patient: Patient;
  id: string;
  message = '';
  isLoaded = false;

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private patientsService: PatientsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'name': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32)
        ]),
      'birthdate': new FormControl(
        null,
        [
          Validators.required,
        ]),
      'sex': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(6)
        ]),
      'country': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(64)
        ]),
      'state': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(64)
        ]),
      'address': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(64)
        ])
    });
    let url = this.activatedRoute.snapshot.url[1].path;
    this.patientsService.getPatientById(+url)
      .subscribe(patient => {
          this.id = this.activatedRoute.snapshot.url[1].path;
          this.patient = patient;
          this.initForm();
          this.isLoaded = true;
    });
  }

  onSubmit(form: NgForm): void {
    const {name, birthdate, sex, country, state, address} = form.value;
    const patient = new Patient(
      name, birthdate, sex, country, state, address, +this.id
    );
    this.patientsService.updatePatient(patient)
      .subscribe( () => {
        this.updatedPatient.emit(patient);
        this.message = 'Patient edited';
        window.setTimeout(() => this.back(), 3000);
      });
  }

  onDelete(id: string): void {
    this.patientsService.deletePatient(+id)
      .subscribe( () => {
        this.deletedPatient.emit();
        this.message = 'Patient was successfully deleted';
        window.setTimeout(() => this.back(), 2000);
        window.setTimeout(() => window.location.reload(), 3000);
      });
  }

  private back(): void {
    this.router.navigate(['healthapp/main/1']);
  }

  initForm() {
      let name = this.patient.name;
      let birthdate = this.patient.birthdate;
      let sex = this.patient.sex;
      let country = this.patient.country;
      let state = this.patient.state;
      let address = this.patient.address;

    this.editForm = this.formBuilder.group({
      name: [name],
      birthdate: [birthdate],
      sex: [sex],
      country: [country],
      state: [state],
      address: [address]
    });
  }
}
