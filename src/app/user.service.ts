import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './iuser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('/getKorisnici');
  }
}
