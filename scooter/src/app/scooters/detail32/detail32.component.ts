import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Scooter} from "../../models/scooter";

@Component({
  selector: 'app-detail32',
  templateUrl: './detail32.component.html',
  styleUrls: ['./detail32.component.css']
})
export class Detail32Component implements OnInit {

  @Input('inputElement')
  element: Scooter;

  @Output()
  scooterUpdated = new EventEmitter<Scooter>();

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateScooter(){
    this.scooterUpdated.emit(this.element)
  }
}
