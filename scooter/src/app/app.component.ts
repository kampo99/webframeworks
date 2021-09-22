import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scooter';
  public state = 1;


 public change(){
    if (this.state === 0){
      this.state = 1;
    }  else {
      this.state = 0;
    }
  }

}
