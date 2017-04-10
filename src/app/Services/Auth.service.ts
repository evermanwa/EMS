import { Injectable } from '@angular/core';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class AuthService {

  constructor(private cookieService: CookieService) {

  }

  public Authenticate(username: string, password: string): boolean {
    if(this.isTokenValid() === true){ return true; }

    if(username == 'user' && password == 'password'){
      var exp = this.addMinutes(new Date(), 5);
      this.cookieService.set('loginToken', "true", exp);
      return true;
    }
    return false;
  }

  private isTokenValid(): boolean{
    var cookie = this.cookieService.get('loginToken');
    if(cookie){
      return true;
    }
  }

  private addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }
}
