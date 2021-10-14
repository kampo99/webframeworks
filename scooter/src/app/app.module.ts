import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import { Overview31Component } from './scooters/overview31/overview31.component';
import { Overview32Component } from './scooters/overview32/overview32.component';
import { Detail32Component } from './scooters/detail32/detail32.component';
import { Overview33Component } from './scooters/overview33/overview33.component';
import { Detail33Component } from './scooters/detail33/detail33.component';
import {UnknownRouteComponent } from './unknown-route/unknown-route.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    NavbarComponent,
    Overview31Component,
    Overview32Component,
    Detail32Component,
    Overview33Component,
    Detail33Component,
    UnknownRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
