import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Scooter} from "../../models/scooter";
import {ScooterService} from "../../service/scooter.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-detail34',
  templateUrl: './detail34.component.html',
  styleUrls: ['./detail34.component.css']
})
export class Detail34Component implements OnInit, OnChanges {

  inputScooter: Scooter;
  backup: Scooter;


  constructor(private scooterService: ScooterService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.backup = Scooter.copyConstructor(this.inputScooter);
    console.log(this.backup)
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.inputScooter = this.scooterService.findById(params['id']);
        this.backup = Scooter.copyConstructor(this.inputScooter);
      }
    )
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
      this.router.navigate(['scooters/overview34/O']);
    }

  }

  onSave(){
    this.scooterService.save(this.backup);
    console.log(this.inputScooter)
    this.inputScooter = null;
    this.router.navigate(['scooters/overview34/O']);
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
      this.router.navigate(['scooters/overview34/O']);
    }
  }

}
