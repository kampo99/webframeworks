import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SessionSbService} from "../service/session-sb.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnChanges {

  constructor(private sessionsbService: SessionSbService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['signOut'] == 'true'){
        sessionsbService.signOut();
        router.navigate(['sign-in'])
      }
    })
  }

  group: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  token = '';
  alert = false;

  ngOnInit(): void {
    this.token = this.sessionsbService.getTokenFromBrowserStorage();
  }

  async logIn() {
    try {
      await this.sessionsbService.asyncSignIn(this.group.controls['email'].value, this.group.controls['password'].value);
      this.refresh();
      console.log("word")
    } catch (error){
      this.alert = true;
    }

  }


  refresh() {
    console.log("asd")
    this.token = this.sessionsbService.getTokenFromBrowserStorage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh()
  }

}
