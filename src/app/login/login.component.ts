import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {IUser} from '../iuser';
import {IUserLogin} from '../iuserlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  prijava(email, password){
    const user: IUserLogin = {
      email: email,
      password: password
    }

    this.loginService.prijava(user).subscribe(data => this.login = data);

  }
}
