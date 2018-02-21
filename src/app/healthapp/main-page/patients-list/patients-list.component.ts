import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../overall/services/patients.service';
import {Patient} from '../../overall/models/patient.model';

@Component({
  selector: 'ido-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})

export class PatientsListComponent implements OnInit {

  patients: Patient[];
  searchValue = '';
  searchField = 'name';

  constructor(private patientsService: PatientsService) {}

  ngOnInit() {
    this.patientsService.getPatients()
      .subscribe((patients: Patient[]) => {
        this.patients = patients;
      });
  }

  onPatientAdd(patient: Patient) {
    this.patients.push(patient);
  }

}
