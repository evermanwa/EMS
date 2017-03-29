import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {

  }

  public Authenticate(username: string, password: string): boolean {
    if(username == 'user' && password == 'password'){
      return true;
    }

    return false;
  }
}
