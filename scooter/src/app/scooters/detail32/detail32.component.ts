import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Scooter} from "../../models/scooter";

@Component({
  selector: 'app-detail32',
  templateUrl: './detail32.component.html',
  styleUrls: ['./detail32.component.css']
})
export class Detail32Component implements OnInit {
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

  // onSave(){
  //   console.log("Changed scooter" + this.element)
  //   this.savedScooter.emit(this.element);
  //   console.log("Saving Scooter" , this.savedScooter);
  // }

}
