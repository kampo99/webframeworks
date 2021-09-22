import {Component, OnInit} from '@angular/core';
import {Scooter} from 'src/app/models/scooter';

@Component({
  selector: 'app-overview31',
  templateUrl: './overview31.component.html',
  styleUrls: ['./overview31.component.css']
})
export class Overview31Component implements OnInit {
  scooters: Scooter[] = [];

  constructor() {
  }

  ngOnInit() {
    this.scooters = [];
    let nextid = 30000;
    for (let i = 0; i < 8; i++) {
      this.scooters.push(
        Scooter.createSampleScooter(nextid)
      )
      nextid += 3;
    }
  }


}
