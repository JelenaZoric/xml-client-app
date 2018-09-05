import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IReservation} from './ireservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<IReservation[]> {
    return this.http.get<IReservation[]>('getReservations');
  }
}
