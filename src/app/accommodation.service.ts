import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './iuser';
import { HttpClient } from '@angular/common/http';
import {IAccommodation} from './iaccommodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(private http: HttpClient) { }

  public getAccommodations(): Observable<IAccommodation[]> {
    return this.http.get<IAccommodation[]>('/accommodations/getAccommodations');
  }

  public search(place, numPersons): Observable<IAccommodation[]> {
    console.log('usao u accommodation service');
    console.log(place);
    console.log(numPersons);
    return this.http.get<IAccommodation[]>('/accommodations/search?place=' + place + '&numPersons=' + numPersons);
  }
}
