import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {Overview31Component} from "./scooters/overview31/overview31.component";
import {Overview32Component} from "./scooters/overview32/overview32.component";
import {Overview33Component} from "./scooters/overview33/overview33.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'scooters/overview31', component: Overview31Component},
  {path: 'scooters/overview32', component: Overview32Component},
  {path: 'scooters/overview33', component: Overview33Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
