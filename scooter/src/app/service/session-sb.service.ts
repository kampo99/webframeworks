import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {share, shareReplay} from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class SessionSbService {


  private BROWSER_STORAGE: string = "data";


  constructor(private httpClient: HttpClient) {
    this.getTokenFromBrowserStorage();
  }


   async asyncSignIn(email: String, password: String): Promise<User>{
    localStorage.clear();
    let observable = this.httpClient.post("http://localhost:8080/authentication/login",
      {email: email, password: password}, { observe: 'response' }).pipe(shareReplay(1));


    let response = await observable.toPromise().catch(reason => { console.log(reason); this.signOut(); return null})

     let user = (response?.body as unknown as User);


    observable.subscribe(data => {

      let token = data['headers'].get('Authorization');

      if (token == null){
        throw new Error('There was no token present in the response');
      }

      token = token.replace('Bearer ', '');

      this.saveTokenIntoBrowserStorage(token, user);

    },
      error => {
      console.log(error)
        alert("Could not authenticate with provided credentials");
      this.signOut();
      })
    return user;
  }

  signOut(){
    sessionStorage.clear();
  }

  saveTokenIntoBrowserStorage(token: string, user: User){
    sessionStorage.setItem(this.BROWSER_STORAGE, JSON.stringify({token: token, user: user}));
  }

  getTokenFromBrowserStorage(){
    try {
      return JSON.parse(sessionStorage.getItem(this.BROWSER_STORAGE)).token;
    }catch (error){
      return null;
    }
  }

  getUserFromBrowserStorage(){
    try {
      return JSON.parse(sessionStorage.getItem(this.BROWSER_STORAGE)).user;
    } catch (error){
      return null;
    }
  }

}
