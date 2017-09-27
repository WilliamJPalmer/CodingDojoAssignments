import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
