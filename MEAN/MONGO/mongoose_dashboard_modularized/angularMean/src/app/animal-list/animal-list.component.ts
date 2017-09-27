import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Array<any> = [{_id: "fakeid 2", name: "horse", weight: 5, color: "green"}]

  constructor() { }

  ngOnInit() {
  }

}
