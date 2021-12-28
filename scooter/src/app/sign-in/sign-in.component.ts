import { Component, OnInit } from '@angular/core';
import {SessionSbService} from "../service/session-sb.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private sessionsbService: SessionSbService) { }
  email = '';
  password = '';
  token = '';
  alert = false;

  ngOnInit(): void {
  }

  async logIn(){
      await this.sessionsbService.asyncSignIn(this.email, this.password).catch(error => {this.alert = true});
      this.token = this.sessionsbService.getTokenFromBrowserStorage();
  }

}
