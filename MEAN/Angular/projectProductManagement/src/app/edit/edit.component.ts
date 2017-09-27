import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service'; // added this
import { ProductService } from '../product.service'; // added this
import { Routes, RouterModule } from '@angular/router';  // added this
import { Router, ActivatedRoute } from '@angular/router';  // added this

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // this was moved to class ... products.ts
  constructor(private _httpService: ProductService, _activatedRoutes:ActivatedRoute){
    _activatedRoutes.snapshot.params.id
    // snapshot take the params of url
    console.log("over here")
  }

  ngOnInit() {
  }

}
