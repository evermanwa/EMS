import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';

@Component({
  templateUrl: '../Templates/menu.component.html'
})
export class MenuComponent implements OnInit{
  content = "Data Here!";

  ngOnInit(): void {
    if(this.auth.isTokenValid() === false){
      this.router.navigate(['login'])
        .then(data => {
          //console.log('Result Value: ' + data);
        });
    }
    else {
      console.log('Initializing - ' + 'Login');
    }
  }

  constructor(private auth: AuthService,
  private router: Router) {

  }
}
