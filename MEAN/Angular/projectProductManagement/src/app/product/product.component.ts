import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service'; // added this
import { Products } from '../products';
import { ProductService } from '../product.service'; // added this
import { Routes, RouterModule } from '@angular/router';  // added this
import { Router, ActivatedRoute } from '@angular/router';  // added this

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: "Show All Products"
    all: Array<Products>;

  constructor(
      private _productService: ProductService,
      private _router: Router,
  ) {
    console.log("here")
    this.all = this._productService.getAllProducts();
  // _productService.productsObservable.subscribe((updatedProducts) => {this.all = updatedProducts;}
  // )}

}

  ngOnInit() {}

}
