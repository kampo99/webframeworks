import {Injectable} from '@angular/core';
import {Scooter} from "../models/scooter";

@Injectable({
  providedIn: 'root'
})
export class ScooterService {
  scooters: Scooter[] = [];
  nextid: number = 30000;



  constructor() {
    for (let i = 0; i < 8; i++) {
      this.scooters.push(
        Scooter.createSampleScooter(this.getNextId())
      )
    }
  }

  findAll(): Scooter[] {
    return this.scooters;
  }

  findById(id: number): Scooter {
    for (let i = 0; i < this.scooters.length; i++) {
      if (id == this.scooters[i].id) {
        return this.scooters[i];
      }
    }
    return null;
  }

  save(scooter: Scooter): Scooter {
    for (let i = 0; i < this.scooters.length; i++) {
      if (this.scooters[i].id == scooter.id) {
        this.scooters[i] = scooter;
        return this.scooters[i];
      }
    }
    return null;
  }

  deleteById(id: number){
    for (let i = 0; i < this.scooters.length; i++) {
      if (this.scooters[i].id == id){
        const index = this.scooters.indexOf(this.scooters[i])
        this.scooters.splice(index, 1);
        break;
      }
    }
  }

    getNextId(): number{
    this.nextid += 3;
    return this.nextid;
  }


}
