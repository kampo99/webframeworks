import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {Overview31Component} from "./scooters/overview31/overview31.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'scooters/overview31', component: Overview31Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
