import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// City
import { SeatleComponent } from './seatle/seatle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WashingtonComponent},
  {path: 'burbank', component: BurbankComponent},
  {path: 'chicago', component: ChicagoComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'sanjose', component: SanjoseComponent},
  {path: 'seatle', component: SeatleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
