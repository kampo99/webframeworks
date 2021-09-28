import { Component, OnInit } from '@angular/core';
import {Scooter} from "../../models/scooter";

@Component({
  selector: 'app-overview32',
  templateUrl: './overview32.component.html',
  styleUrls: ['./overview32.component.css']
})
export class Overview32Component implements OnInit {
  scooters: Scooter[] = [];
  nextid: number = 30000;

  constructor() { }

  ngOnInit(){
    this.scooters = [];

    for (let i = 0; i < 8; i++) {
      this.scooters.push(
        Scooter.createSampleScooter(this.nextid)
      )
      this.nextid += 3;
    }
  }
  onNewScooter(){
    this.scooters.push(Scooter.createSampleScooter(this.nextid))
    this.nextid += 3;
  }


}
