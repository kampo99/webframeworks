import { Component, OnInit } from '@angular/core';
import {ScooterService} from "../../service/scooter.service";
import {Scooter} from "../../models/scooter";

@Component({
  selector: 'app-overview33',
  templateUrl: './overview33.component.html',
  styleUrls: ['./overview33.component.css']
})
export class Overview33Component implements OnInit {
  scooters: Scooter[] = [];
  nextid: number = 30000;
  selectedScooter: Scooter;

  constructor() {
  }

  ngOnInit(): void {
    this.scooters = [];

    for (let i = 0; i < 8; i++) {
      this.scooters.push(
        Scooter.createSampleScooter(this.nextid)
      )
      this.nextid += 3;
    }
  }

  OnSelect(scooter: Scooter): void {
    if (this.selectedScooter != null && this.selectedScooter.id === scooter.id) {
      this.selectedScooter = null;
      console.log(this.selectedScooter);
    } else {
      this.selectedScooter = Object.assign(new Scooter(), scooter);
      console.log(this.selectedScooter);
    }
  }

  onNewScooter() {
    this.selectedScooter = Scooter.createSampleScooter(this.nextid);
    this.scooters.push(this.selectedScooter);
    this.nextid += 3;
  }

  onDelete(scooter: Scooter): void {
    for (let i = 0; i < this.scooters.length; i++) {
      if (this.scooters[i].id == scooter.id) {
        const index = this.scooters.indexOf(this.scooters[i]);
        this.scooters.splice(index, 1);
        break;
      }
    }
  }

}
