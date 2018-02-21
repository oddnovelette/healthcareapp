import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Patient} from '../../../../overall/models/patient.model';
import {PatientsService} from '../../../../overall/services/patients.service';

@Component({
  selector: 'ido-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})

export class CreatePatientComponent implements OnInit {

  @Output() newPatient = new EventEmitter<Patient>();
  message = '';

  gender = [
    {sex: 'Male', label: 'Male'},
    {sex: 'Female', label: 'Female'}
  ];

  constructor(
    private patientsService: PatientsService,
    private router: Router
  ) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32),
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
  }

  onSubmit(): void {
    const {name, birthdate, sex, country, state, address} = this.form.value;
    const patient = new Patient(name, birthdate, sex, country, state, address);
    this.patientsService.addPatient(patient)
      .subscribe( () => {
        this.message = 'Patient created';
        window.setTimeout(() => window.location.reload(), 3000);
      });
  }

}
