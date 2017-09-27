import { Component } from '@angular/core';
// import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'This is Jimmys Angular!'; // this will get sent to the front end in the app.component.html
  x: number = 1000;
  y: number = 9899;
  mystr: string = "This is my test for angular";
  name = 'Bill Gates'
  today = new Date();
// ----------------
  user = {
    first_name: 'Darth',
    last_name: 'Vadar'
  }
// ----------------
  num: number = 1;

  logNum(){
    console.log('num is: ', this.num);
  }

  // increaseNum(){
  //   this.num = this.num + 1;
  // }
  //
  // multiNum(){
  //   console.log(this.num = this.num * 2);
  // }
// ----------------
  // newUsers = [];  // this will be filled by line 45
  newUser = {
    firstName: '',
    lastName: ''
  }

  onSubmit(){
    console.log("onSubmit() function was invoked");
    // this.newUsers.push(this.newUsers);  // this pushes into newUsers array line 37
    this.newUser = {
      firstName: '',
      lastName: ''
    }
  }
  //
  // <!-- <input type="text" name="firstName" [value]="user.firstName" >
  // <input type="text" name="firstName" (change)='user.firstName = $event.target.value' [value]="user.firstName" > -->

// ----------------
  myBoolean = true;
  myArray = [2,4,7,3,673,,33,754,45,5678,22];
  color = 'red';

}

// class User {
//   constructor(
//     public id: number = null,
//     public first_name: string = "",
//     public last_name: string = "",
//     public email: string = "",
//     public password: string = "",
//     public created_at: Date = new Date(),
//     public updated_at: Date = new Date()
//   ){}
// }
