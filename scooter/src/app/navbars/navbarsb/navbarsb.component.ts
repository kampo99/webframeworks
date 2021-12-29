import { Component, OnInit } from '@angular/core';
import {SessionSbService} from "../../service/session-sb.service";

@Component({
  selector: 'app-navbarsb',
  templateUrl: './navbarsb.component.html',
  styleUrls: ['./navbarsb.component.css']
})
export class NavbarsbComponent implements OnInit {



  constructor(private sessionsbService: SessionSbService) {

  }

  ngOnInit(): void {
  }


  loggedIn(){
    return this.sessionsbService.getTokenFromBrowserStorage() != undefined;
  }
}
