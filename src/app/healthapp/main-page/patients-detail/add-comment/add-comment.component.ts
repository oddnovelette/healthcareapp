import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Record} from '../../../overall/models/record.model';
import * as moment from 'moment';
import {RecordsService} from '../../../overall/services/records.service';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../../../overall/models/patient.model';

@Component({
  selector: 'ido-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Output() newComment = new EventEmitter<Record>();

  constructor(
    private recordsService: RecordsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let patient = this.route.snapshot.url[1].path;
    let date = moment().format('DD.MM.YYYY HH:mm:ss');
    let {text} = form.value;
    const record = new Record(+patient, date, text);
    this.recordsService.addRecord(record)
      .subscribe(() => {
        this.newComment.emit(record);
        form.reset();
    });
  }
}
