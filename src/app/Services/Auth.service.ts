///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

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
    this.url = environment.getAPIString();
  }

  //authenticate username and password
  public Authenticate(username: string, password: string): Promise<boolean> {
    return this.http.post(this.url + '/Authentication/login',
    {
      username: username,
      password: password
    } ,
      this.headers)
      .toPromise()
      .then(response => {
        var json = response.json();
        var exp = this.addMinutes(new Date(), 5);
        this.cookieService.set('loginToken', json['key'], exp);

        console.log(this.cookieService.get('loginToken'));

        return true;
      })
      .catch(error => {
        this.handleError(error);
        throw error;
      });
  }

  public UpdateTokenExpiration(): void{
    //we would send our api a call to validate our token
    //then when we return we would then update our html expiration

    var token = this.cookieService.get('loginToken');
    var exp = this.addMinutes(new Date(), 5);

    this.cookieService.delete('loginToken');
    this.cookieService.set('loginToken', token, exp);
  };

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
