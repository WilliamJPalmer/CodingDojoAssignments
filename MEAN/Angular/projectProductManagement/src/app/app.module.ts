import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
// Http
import {HttpModule} from '@angular/http'; // added this line
// import { HttpService } from './http.service';  // added this line
import { ProductService } from './product.service';  // added this line
// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
// ngModule
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule // added this line
  ],
  providers: [ProductService], // added HttpService between [  ]
  bootstrap: [AppComponent]
})
export class AppModule { }
