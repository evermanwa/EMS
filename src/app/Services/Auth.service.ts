import { Injectable } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url: string;

  constructor(private cookieService: CookieService,
  private http: Http,
  private router: Router) {

  }

  //authenticate username and password
  public Authenticate(username: string, password: string): Promise<boolean> {
    return this.http.post('http://localhost:61194/api/Authentication/login',
    { username: username, password: password }, this.headers)
      .toPromise()
      .then(response => {

        var json = response.json();
        var exp = this.addMinutes(new Date(), 5);
        this.cookieService.set('loginToken', json['key'], exp);
        return true;
      })
      .catch(error => {
        this.handleError(error);
        throw error;
      });
  }

  //If context is invalid, navigate to login
  public ValidateContext(): void {
    if(this.isTokenValid() === false){
      this.router.navigate(['login'])
        .then(data => {
          //Do nothing after nav
        });
    }
    else {
      //console.log("Validation - Passed");
    }
  }

  //check if token is valid
  public isTokenValid(): boolean{
    var cookie = this.cookieService.get('loginToken');
    if(cookie){
      return true;
    }

    return false;
  }

  //add minutes to date
  private addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
