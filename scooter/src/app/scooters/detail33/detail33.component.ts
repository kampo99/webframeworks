import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScooterService} from "../../service/scooter.service";
import {Scooter} from "../../models/scooter";

@Component({
  selector: 'app-detail33',
  templateUrl: './detail33.component.html',
  styleUrls: ['./detail33.component.css']
})
export class Detail33Component implements OnInit {
  @Input('inputScooter')
  inputScooter: Scooter;

  @Output()
  deletedScooter = new EventEmitter<Scooter>();

  constructor() {}

  ngOnInit(): void {
  }

  onDeleteScooter(){
    this.deletedScooter.emit(this.inputScooter);
    this.inputScooter = null;
  }

}
