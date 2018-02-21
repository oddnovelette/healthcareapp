import {Api} from '../backend/api';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Record} from '../models/record.model';
import {Injectable} from '@angular/core';

@Injectable()
export class RecordsService extends Api {
  constructor(public http: Http) {
    super(http);
  }

  addRecord(record: Record): Observable<Record> {
    return this.post('records', record);
  }

  getRecords(): Observable<Record[]> {
    return this.get('records');
  }

  getRecordById(id: number): Observable<Record> {
    return this.get(`records/${id}`);
  }
}
