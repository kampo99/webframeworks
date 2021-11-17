import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Scooter} from "../../models/scooter";
import {Subscription} from "rxjs";
import {ScooterService} from "../../service/scooter.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ScooterSbService} from "../../service/scooter-sb.service";

@Component({
  selector: 'app-overview35',
  templateUrl: './overview35.component.html',
  styleUrls: ['./overview35.component.css']
})
export class Overview35Component implements OnInit, OnChanges {


  selectedScooter: Scooter;

  private childparamSub: Subscription = null;

  constructor(private scooterService: ScooterSbService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.childparamSub = this.activatedRoute.firstChild.params.subscribe((params: Params) => {
      console.log(params)
      if (params['id'] == 'O'){
        this.selectedScooter = null;
      } else {
        this.selectedScooter = this.scooterService.findById(params['id'])
      }
    })
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
    this.scooterService.newScooter(Scooter.createSampleScooter(0)).subscribe(responseData => {
      this.selectedScooter = Object.assign(new Scooter(), responseData);
      this.scooters.push(this.selectedScooter);
      this.router.navigate([this.selectedScooter.id], {relativeTo: this.activatedRoute});
    });


  }

}
