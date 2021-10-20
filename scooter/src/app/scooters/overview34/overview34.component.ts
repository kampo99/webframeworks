import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Scooter} from "../../models/scooter";
import {ScooterService} from "../../service/scooter.service";
import {ActivatedRoute, NavigationEnd, Params, Router} from "@angular/router";
import * as url from "url";

@Component({
  selector: 'app-overview34',
  templateUrl: './overview34.component.html',
  styleUrls: ['./overview34.component.css']
})
export class Overview34Component implements OnInit, OnChanges {

  selectedScooter: Scooter;

  constructor(private scooterService: ScooterService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(
      (params: Params) => {
        if (params['url'] == '/scooters/overview34/O'){
          this.selectedScooter = null;
        } else {

        }
        console.log(params['url']);
      }
    )

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }


  get scooters(): Scooter[]{
    return this.scooterService.findAll();
  }

  OnSelect(scooter: Scooter): void {
    if (this.selectedScooter != null && this.selectedScooter.id === scooter.id){
      this.selectedScooter = null;
      this.router.navigate(['O'], {relativeTo: this.activatedRoute});
    } else {
      this.selectedScooter = Object.assign(new Scooter(), scooter);
      this.router.navigate([scooter.id], {relativeTo: this.activatedRoute})
    }
  }

  onNewScooter() {
    this.selectedScooter = Scooter.createSampleScooter(this.scooterService.getNextId());
    this.scooters.push(this.selectedScooter);
    this.router.navigate([this.selectedScooter.id], {relativeTo: this.activatedRoute});
  }

}
