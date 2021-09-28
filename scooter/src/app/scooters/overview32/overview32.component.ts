import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Scooter} from "../../models/scooter";
import {ScooterService} from "../../service/scooter.service";


@Component({
  selector: 'app-overview32',
  templateUrl: './overview32.component.html',
  styleUrls: ['./overview32.component.css'],
  providers: [ScooterService]
})
export class Overview32Component implements OnInit {
  scooters: Scooter[] = [];
  nextid: number = 30000;
  selectedScooter: Scooter;

  constructor(private scooterservice: ScooterService) { }

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

  onSelect(scooter: Scooter): void{
    this.selectedScooter = Scooter.trueCopy(scooter)
  }

  onScooterUpdated(scooter: Scooter): void{
      this.scooterservice.updateScooter(scooter);
      console.log(scooter);
  }

}
