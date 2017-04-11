import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';

@Component({
  templateUrl: '../Templates/login.component.html'
})
export class LoginComponent implements OnInit {
  title = 'app works!';
  username = '';
  password = '';
  status: boolean = false;

  ngOnInit(): void {
    if(this.auth.isTokenValid() === true){
      this.router.navigate(['menu'])
        .then(data => {
          //console.log('Result Value: ' + data);
        });
    }
    else {
      console.log('Initializing - ' + 'Login');
    }
  }

  constructor(private router: Router,
  private auth: AuthService) {

  }

  validate(): void {
    if ( !this.username && !this.password ) {
      return;
    }

    if (this.auth.Authenticate(this.username, this.password)){
      this.status = true;
      console.log('Logging In - ' + this.status);
      this.router.navigate(['menu'])
        .then(data => {
          //console.log('Result Value: ' + data);
        });
    }
    else {
      this.status = false;
      console.log('Failed - ' + this.status);
      this.router.navigate(['error404'])
        .then(data => {
          //console.log('Result Value: ' + data);
        });
    }
  }
}
