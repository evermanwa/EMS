import { Component } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  templateUrl: '../Templates/login.component.html'
})
export class LoginComponent {
  title = 'app works!';
  username: string = 'user';
  password: string = 'password'

  constructor(private router: Router){

  }

  validate(): void{
    if(this.username === "user" &&
      this.password === "password"){
      console.log("Logged In!");
      this.router.navigate(['menu']);
    }
    else {
      console.log(this.username + ' ' + this.password);
    }
  }
}
