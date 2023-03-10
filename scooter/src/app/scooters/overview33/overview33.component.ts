import { Component, OnInit } from '@angular/core';
import {ScooterService} from "../../service/scooter.service";
import {Scooter} from "../../models/scooter";

@Component({
  selector: 'app-overview33',
  templateUrl: './overview33.component.html',
  styleUrls: ['./overview33.component.css']
})
export class Overview33Component implements OnInit {
  selectedScooter: Scooter;

  constructor(private scooterService: ScooterService) {
  }

  ngOnInit(): void {
  }

  get scooters(): Scooter[]{
    return this.scooterService.findAll();
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
    this.selectedScooter = Scooter.createSampleScooter(this.scooterService.getNextId());
    this.scooters.push(this.selectedScooter);
  }

  unSelect(){
    this.selectedScooter = null;
  }


}
