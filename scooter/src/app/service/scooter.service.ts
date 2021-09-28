import { Injectable } from '@angular/core';
import {Scooter} from "../models/scooter";

@Injectable({
  providedIn: 'root'
})
export class ScooterService {
  scooterMap: Map<string, Scooter> = new Map<string, Scooter>();

  constructor() { }




  updateScooter(scooter: Scooter){
    this.scooterMap.set(scooter.tag, scooter);


}


}
