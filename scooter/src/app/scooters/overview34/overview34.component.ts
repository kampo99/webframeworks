import { Component, OnInit } from '@angular/core';
import {Scooter} from "../../models/scooter";
import {ScooterService} from "../../service/scooter.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-overview34',
  templateUrl: './overview34.component.html',
  styleUrls: ['./overview34.component.css']
})
export class Overview34Component implements OnInit {

  selectedScooter: Scooter;

  constructor(private scooterService: ScooterService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  get scooters(): Scooter[]{
    return this.scooterService.findAll();
  }

  OnSelect(scooter: Scooter): void {
    if (this.selectedScooter != null && this.selectedScooter.id === scooter.id){
      this.selectedScooter = null;
      this.router.navigate(['/overview34']);
    } else {
      this.selectedScooter = Object.assign(new Scooter(), scooter);
      this.router.navigate([scooter.id], {relativeTo: this.activatedRoute})
      console.log("text")
    }






    // if (this.selectedScooter != null && this.selectedScooter.id === scooter.id) {
    //   this.selectedScooter = null;
    //   console.log(this.selectedScooter);
    // } else {
    //   this.selectedScooter = Object.assign(new Scooter(), scooter);
    //   console.log(this.selectedScooter);
    // }
  }

  onNewScooter() {
    this.selectedScooter = Scooter.createSampleScooter(this.scooterService.getNextId());
    this.scooters.push(this.selectedScooter);
  }

  marker(id: number){
    return this.selectedScooter.id = id;
  }

}
