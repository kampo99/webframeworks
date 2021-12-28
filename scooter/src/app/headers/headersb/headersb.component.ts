import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SessionSbService} from "../../service/session-sb.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-headersb',
  templateUrl: './headersb.component.html',
  styleUrls: ['./headersb.component.css']
})
export class HeadersbComponent implements OnInit, OnChanges {
  date = new Date().toDateString();

  name = "";

  constructor(private sessionsbService: SessionSbService) {
    this.setName()
  }


  setName(){
    try {
      this.name = this.sessionsbService.currentUser.name;
    } catch (error){

    }
  }


  ngOnInit(): void {
    this.setName();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setName();
  }

}
