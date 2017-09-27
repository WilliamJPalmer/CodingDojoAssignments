import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Component
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
// Routes
const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
];
// ngModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
