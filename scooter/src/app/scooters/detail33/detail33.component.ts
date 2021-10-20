import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ScooterService} from "../../service/scooter.service";
import {Scooter} from "../../models/scooter";
import {findLast} from "@angular/compiler/src/directive_resolver";

@Component({
  selector: 'app-detail33',
  templateUrl: './detail33.component.html',
  styleUrls: ['./detail33.component.css']
})
export class Detail33Component implements OnInit, OnChanges {
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
