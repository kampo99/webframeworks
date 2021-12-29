import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SessionSbService} from "../service/session-sb.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnChanges {

  constructor(private sessionsbService: SessionSbService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['signOut'] == 'true'){
        sessionsbService.signOut();
        router.navigate(['sign-in'])
      }
    })
  }

  email = '';
  password = '';
  token = '';
  alert = false;

  ngOnInit(): void {
    this.token = this.sessionsbService.getTokenFromBrowserStorage();
  }

  async logIn() {
    await this.sessionsbService.asyncSignIn(this.email, this.password);
    this.refresh();
    console.log("word")
  }


  refresh() {
    console.log("asd")
    this.token = sessionStorage.getItem('token')
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh()
  }

}
