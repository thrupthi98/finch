import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrescriptionComponent} from '../app/prescription/prescription.component'


const routes: Routes = [
 {path:'', component:PrescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
