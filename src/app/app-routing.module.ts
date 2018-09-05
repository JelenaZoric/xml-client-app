import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {ReservationComponent} from './reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'accommodations/search', component: SearchFormComponent},
  { path: 'accommodations/search/getReservations', component: ReservationComponent},
  { path: 'addReservation', component: ReservationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
