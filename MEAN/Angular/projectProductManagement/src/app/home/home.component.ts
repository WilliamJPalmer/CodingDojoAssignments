import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service'; // added this
import { ProductService } from '../product.service'; // added this was renamed from HttpService
import { Routes, RouterModule } from '@angular/router';  // added this
import { Router, ActivatedRoute } from '@angular/router';  // added this


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];

  constructor(){}

  ngOnInit() {
  }

}
