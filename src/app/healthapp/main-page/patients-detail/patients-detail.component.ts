import {Component, OnInit} from '@angular/core';
import {Patient} from '../../overall/models/patient.model';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import {PatientsService} from '../../overall/services/patients.service';
import {RecordsService} from '../../overall/services/records.service';
import {Record} from '../../overall/models/record.model';


@Component({
  selector: 'ido-patients-detail',
  templateUrl: './patients-detail.component.html',
  styleUrls: ['./patients-detail.component.css']
})

export class PatientsDetailComponent implements OnInit {
  patient: Patient;
  records: Record[];
  isLoaded = false;
  private url: string;

  constructor(
    private route: ActivatedRoute,
    private patientsService: PatientsService,
    private recordsService: RecordsService,
  ) {
    this.route.params.subscribe(params => {
      this.url = params['id'];
    });
  }

  ngOnInit() {
    this.route.params
      .mergeMap((params: Params) => this.patientsService.getPatientById(params['id']))
      .mergeMap((patient: Patient) => {
      this.patient = patient;
      return this.recordsService.getRecords();
      })
      .subscribe((record: Record[]) => {
      this.records = record;
        this.records = this.records.filter(
          records => records.patient === +this.url);
        return this.records;
      });
      this.isLoaded = true;
  }

  newCommentAdded(records: Record) {
    this.records.push(records);
  }
}
