import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AccommodationComponent } from './accommodation/accommodation.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { SearchFormComponent } from './search-form/search-form.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';

const routes = [
  { path: 'search', component: SearchFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AccommodationComponent,
    SearchFormComponent,
    ReservationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
