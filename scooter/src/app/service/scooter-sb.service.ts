import {Injectable} from '@angular/core';
import {Scooter} from "../models/scooter";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ScooterSbService {

  scooters: Scooter[] = [];
  nextid: number = 30000;


  constructor(private http: HttpClient) {
    this.restGetScooters();
  }

  private restGetScooters() {
    this.http.get('http://localhost:8080/scooters')
      .pipe(map(responseData => {
        const scooterArray = [];
        for (const scooter in responseData) {
          scooterArray.push(responseData[scooter])
        }
        return scooterArray;
      }))
      .subscribe(bScooter => {
        for (let i = 0; i < bScooter.length; i++) {
          this.scooters.push(Scooter.copyConstructor(bScooter[i]));
        }
      })
  }

  private restPostScooter(scooter: Scooter) {
    this.http.post('http://localhost:8080/scooters', scooter).subscribe(responseData => {
      console.log(responseData);
    });
  }

  private restPutScooter(scooter: Scooter){
    this.http.put('http://localhost:8080/scooters/{id}', scooter).subscribe(responseData => {
    })
  }

  private restDeleteScooter(scooterId: number){
    this.http.delete('http://localhost:8080/scooters/{id}').subscribe(responseData =>{

    })
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

  newScooter(scooter: Scooter){
    this.restPostScooter(scooter);
  }

  save(scooter: Scooter): Scooter {
    for (let i = 0; i < this.scooters.length; i++) {
      if (this.scooters[i].id == scooter.id) {
        this.scooters[i] = scooter;
        this.restPutScooter(this.scooters[i]);
        return this.scooters[i];
      }
    }
    return null;
  }

  deleteById(id: number) {
    for (let i = 0; i < this.scooters.length; i++) {
      if (this.scooters[i].id == id) {
        const index = this.scooters.indexOf(this.scooters[i])
        this.scooters.splice(index, 1);
        this.restDeleteScooter(index)
        break;
      }
    }
  }

  getNextId(): number {
    this.nextid = this.scooters[this.scooters.length - 1].id + 3;
    return this.nextid;
  }

}
