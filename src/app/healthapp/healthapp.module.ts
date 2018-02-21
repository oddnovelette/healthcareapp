import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverallModule} from '../overall/overall.module';
import {HealthappRoutingModule} from './healthapp-routing.module';
import {MainPageComponent} from './main-page/main-page.component';
import {HealthappComponent} from './healthapp.component';
import {HeaderComponent} from './overall/components/header/header.component';
import {DropmenuDirective} from './overall/directives/dropmenu.directive';
import {PatientsService} from './overall/services/patients.service';
import {EditPageComponent} from './edit-page/edit-page.component';
import {PatientsListComponent} from './main-page/patients-list/patients-list.component';
import {PatientsDetailComponent} from './main-page/patients-detail/patients-detail.component';
import {AddCommentComponent} from './main-page/patients-detail/add-comment/add-comment.component';
import {RecordsService} from './overall/services/records.service';
import {SearchfieldPipe} from './overall/pipes/searchfield.pipe';
import { HandlePatientComponent } from './main-page/patients-list/handle-patient/handle-patient.component';
import { CreatePatientComponent } from './main-page/patients-list/handle-patient/create-patient/create-patient.component';
import {NotfoundPageComponent} from "../overall/components/notfound-page/notfound-page.component";

@NgModule({
  imports: [
    CommonModule,
    OverallModule,
    HealthappRoutingModule
  ],
  declarations: [
    MainPageComponent,
    HealthappComponent,
    HeaderComponent,
    DropmenuDirective,
    EditPageComponent,
    PatientsListComponent,
    PatientsDetailComponent,
    AddCommentComponent,
    SearchfieldPipe,
    HandlePatientComponent,
    CreatePatientComponent,
    NotfoundPageComponent
  ],
  providers: [PatientsService, RecordsService]
})

export class HealthappModule {}
