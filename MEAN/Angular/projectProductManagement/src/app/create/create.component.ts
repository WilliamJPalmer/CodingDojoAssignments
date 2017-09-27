import { Products } from '../products';  // import this from models ... products.ts
import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service'; // added this
import { ProductService } from '../product.service'; // added this
import { Routes, RouterModule } from '@angular/router';  // added this
import { Router, ActivatedRoute } from '@angular/router';  // added this
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // same as products class ... products.ts
  title = "Project Product Management";
  // products: Array<Products>
  all: Array<Products>// setting new array
  newProduct = new Products();  // creating new variable // this will be used in html
  constructor(private _productService: ProductService, // changed from.._httpService: HttpService
    private _router: Router
  ){
    _productService.productsObservable.subscribe( (updatedProducts) => {
    console.log(updatedProducts)
    this.all = updatedProducts
  })}
  ngOnInit() {
  // .then
  }
  onSubmit(){
    this._productService.create(this.newProduct)
    this.newProduct = new Products();
    // this.all.push(this.newProduct)
    // console.log(this.all)
    // this._productService.updateProducts(this.all)
    // console.log('hello')
    // this.newProduct = new Products();
    // this._router.navigate(['/products'])
  }
}
