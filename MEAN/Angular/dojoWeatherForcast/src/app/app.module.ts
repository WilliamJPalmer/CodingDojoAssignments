import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Http Modules
import {HttpModule} from '@angular/http';
import { HttpService } from './http.service';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// Components Modules
import { AppComponent } from './app.component';
import { SeatleComponent } from './seatle/seatle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule  // imported this
  ],
  providers: [HttpService],  // added HttpService inside the [ ]
  bootstrap: [AppComponent]
})
export class AppModule { }
