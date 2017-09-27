import { Component } from '@angular/core';
import { ProductService } from './product.service'
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Product Management';
  subscription: Subscription

  products = []

  constructor(private _productService: ProductService){
    _productService.updateProducts(this.products);
    _productService.productsObservable.subscribe(
      products => this.products = products,
      (err) => {},  // this line is not nessessary
      () => {}  // this line is not nessessary
    );
  }

  changeData() {
    this.products = []
  }

}
