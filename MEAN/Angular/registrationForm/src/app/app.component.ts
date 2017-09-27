import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  users = [];
  user = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: '',
    street: '',
    unit: '',
    city: '',
    state: '',
    lucky: '',
  }
  onSubmit(){
    this.users.push(this.user);
    console.log('Submitted')
  }
  
  flag = false;

  activateDiv(){
    this.flag = true;
  }
}
