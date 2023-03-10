import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './headers/header/header.component';
import { NavbarComponent } from './navbars/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Overview31Component } from './scooters/overview31/overview31.component';
import { Overview32Component } from './scooters/overview32/overview32.component';
import { Detail32Component } from './scooters/detail32/detail32.component';
import { Overview33Component } from './scooters/overview33/overview33.component';
import { Detail33Component } from './scooters/detail33/detail33.component';
import {UnknownRouteComponent } from './unknown-route/unknown-route.component';
import { Overview34Component } from './scooters/overview34/overview34.component';
import { Detail34Component } from './scooters/detail34/detail34.component';
import { Detail35Component } from './scooters/detail35/detail35.component';
import { Overview35Component } from './scooters/overview35/overview35.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HeadersbComponent } from './headers/headersb/headersb.component';
import { NavbarsbComponent } from './navbars/navbarsb/navbarsb.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {AuthSbHttpInterceptorService} from "./service/auth-sb-http-interceptor.service";
import { ErrorComponent } from './error/error.component';


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
    UnknownRouteComponent,
    Overview34Component,
    Detail34Component,
    Detail35Component,
    Overview35Component,
    HeadersbComponent,
    NavbarsbComponent,
    SignInComponent,
    ErrorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthSbHttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
