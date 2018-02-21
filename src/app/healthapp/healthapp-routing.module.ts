import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HealthappComponent} from './healthapp.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PatientsDetailComponent} from './main-page/patients-detail/patients-detail.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {HandlePatientComponent} from './main-page/patients-list/handle-patient/handle-patient.component';
import {NotfoundPageComponent} from '../overall/components/notfound-page/notfound-page.component';

const routes: Routes = [
  {path: 'healthapp', component: HealthappComponent, children: [
    {path: 'main', component: MainPageComponent},
    {path: 'create', component: HandlePatientComponent},
    {path: 'main/:id', component: PatientsDetailComponent},
    {path: 'edit/:id', component: EditPageComponent},
    {path: '**', component: NotfoundPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HealthappRoutingModule {}
