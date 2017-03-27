import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  username: string;
  password: string;

  validate(): void{
    if(this.username === "evermanwa" &&
       this.password === "password"){
        console.log("Logged In!");
    }
    else {
      console.log(this.username + ' ' + this.password);
    }
  }
}
