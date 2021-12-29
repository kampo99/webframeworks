import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {share} from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class SessionSbService {

  currentUser: User = null;

  jwtService = new JwtHelperService;


  constructor(private httpClient: HttpClient) {
    this.updateUserInfo();
  }


   async asyncSignIn(email: String, password: String): Promise<User>{

    const observable = this.httpClient.post("http://localhost:8080/authentication/login",
      {email: email, password: password}, { observe: 'response' }).pipe(share());


    let response = await observable.toPromise().catch(reason => { console.log(reason); this.signOut(); return null})

     let user = (response?.body as unknown as User);

    this.currentUser = user;

    observable.subscribe(data => {
        console.log(data)

      let token = data['headers'].get('Authorization');

      if (token == null){
        throw new Error('There was no token present in the response');
      }

      token = token.replace('Bearer ', '');

      this.saveTokenIntoBrowserStorage(token, this.currentUser);

      this.updateUserInfo();
    },
      error => {
      console.log(error)
      this.signOut();
      })
    return user;
  }

  signOut(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.updateUserInfo();
  }

  saveTokenIntoBrowserStorage(token: string, user: User){
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getTokenFromBrowserStorage(){
   return sessionStorage.getItem('token');
  }


  private updateUserInfo(): void{

    if (this.getTokenFromBrowserStorage()){

      const decodedToken = this.jwtService.decodeToken(this.getTokenFromBrowserStorage());

      this.currentUser = new User();
      this.currentUser.email = decodedToken.sub;
      this.currentUser.admin = decodedToken.admin.toLowerCase() === 'true';
      this.currentUser.exp = decodedToken.exp;

    } else {
      console.log("hello")
      this.currentUser = null;
    }
  }
}
