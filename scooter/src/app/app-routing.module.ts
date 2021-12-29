import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {Overview31Component} from "./scooters/overview31/overview31.component";
import {Overview32Component} from "./scooters/overview32/overview32.component";
import {Overview33Component} from "./scooters/overview33/overview33.component";
import {UnknownRouteComponent} from "./unknown-route/unknown-route.component";
import {Detail34Component} from "./scooters/detail34/detail34.component";
import {Overview34Component} from "./scooters/overview34/overview34.component";
import {Overview35Component} from "./scooters/overview35/overview35.component";
import {Detail35Component} from "./scooters/detail35/detail35.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: WelcomeComponent},
  {path: 'scooters/overview31', component: Overview31Component},
  {path: 'scooters/overview32', component: Overview32Component},
  {path: 'scooters/overview33', component: Overview33Component},
  {path: 'scooters/overview34', component:Overview34Component,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'O'},
      {path:':id', component: Detail34Component}
    ]},
  {path: 'scooters/overview35', component:Overview35Component,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'O'},
      {path:':id', component: Detail35Component}
    ]},
  {path: 'sign-up', component: UnknownRouteComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-out', redirectTo: '/sign-in?signOut=true'},
  {path: '**', component: UnknownRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
