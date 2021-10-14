import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Scooter} from "../../models/scooter";
import {ScooterService} from "../../service/scooter.service";

@Component({
  selector: 'app-detail34',
  templateUrl: './detail34.component.html',
  styleUrls: ['./detail34.component.css']
})
export class Detail34Component implements OnInit {
  @Input()
  inputScooter: Scooter;

  @Output()
  unSelectScooter = new EventEmitter<Scooter>();

  backup: Scooter;


  constructor(private scooterService: ScooterService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.backup = Scooter.copyConstructor(this.inputScooter);
    console.log(this.backup)
  }

  ngOnInit(): void {
  }

  disabled(): boolean{
    return this.scooterService.findById(this.inputScooter.id).equals(this.backup);
  }

  enabled(): boolean{
    return !this.scooterService.findById(this.inputScooter.id).equals(this.backup);
  }


  onDeleteScooter(){
    if (confirm("are you sure to discard unsaved changes ?")){
      this.scooterService.deleteById(this.inputScooter.id)
      this.inputScooter = null;
    }

  }

  onSave(){
    this.scooterService.save(this.backup);
    console.log(this.inputScooter)
    this.inputScooter = null;
    this.unSelectScooter.emit();
  }

  onReset(){
    if (this.backup != this.inputScooter){
      let ele = document.getElementById('reset')
    }
    if (confirm("are you sure to discard unsaved changes ?")){
      this.backup.tag = this.inputScooter.tag;
      this.backup.status = this.inputScooter.status;
      this.backup.mileage = this.inputScooter.mileage;
      this.backup.gpsLocation = this.inputScooter.gpsLocation;
      this.backup.batteryCharge = this.inputScooter.batteryCharge;
    }
  }

  onClear(){
    if (confirm("are you sure to discard unsaved changes ?")){
      this.backup.tag = null;
      this.backup.status = null;
      this.backup.mileage = null;
      this.backup.gpsLocation = null;
      this.backup.batteryCharge = null;
    }
  }

  onCancel(){
    if (confirm("are you sure to discard unsaved changes ?")){
      this.inputScooter = null;
      this.unSelectScooter.emit();
    }
  }

}
