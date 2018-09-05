import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IUserLogin} from './iuserlogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public prijava(user): Observable<IUserLogin> {
    return this.http.post<IUserLogin>('/prijava', user);
  }
}
