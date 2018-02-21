import {Api} from '../backend/api';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Patient} from '../models/patient.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PatientsService extends Api {
  constructor(public http: Http) {
    super(http);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.post('patients', patient);
  }

  getPatients(): Observable<Patient[]> {
    return this.get('patients');
  }

  getPatientById(id: number): Observable<Patient> {
    return this.get(`patients/${id}`);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.put(`patients/${patient.id}`, patient);
  }

  deletePatient(id: number): Observable<Patient> {
    return this.delete(`patients/${id}`);
  }
}
