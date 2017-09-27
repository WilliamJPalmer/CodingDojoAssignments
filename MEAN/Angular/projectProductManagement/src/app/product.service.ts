// renamed this from http service
import { Injectable } from '@angular/core';
import { Products } from './products'  // this pulling from the models products.ts
import { BehaviorSubject } from 'rxjs';  //RxJs is short for Reactive Extensions for Javascript which brings the concept of Observables

@Injectable()
export class ProductService{
  products = []
  // any component can call on the productsObservable service and call on the updateProducts method.
  productsObservable = new BehaviorSubject([]);
    // productsObservable is the Observable
    // NEW function is created here
    // Observables is not a singleton
    // only one Observable of that instance being created
    // can use that Observable to change data on
    // anything that is subscribed to the Observable will be notified and updated

  updateProducts(products: Array<any>){
    // this a method with a parameter array of products

      this.productsObservable.next(products)
      // this part calls on the productsObservable and call next and passing in products
      // calling .next and passing products, we are changing the value thats inside our Observable
  }
  create(product){
    this.products.push(product)
    console.log(product)

  }
  getAllProducts(){
    return this.products
  }
  constructor() { }
}
