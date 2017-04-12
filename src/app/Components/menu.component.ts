import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';

@Component({
  templateUrl: '../Templates/menu.component.html'
})
export class MenuComponent implements OnInit{
  content = "Data Here!";

  ngOnInit(): void {
    this.auth.ValidateContext();
  }

  constructor(private auth: AuthService,
  private router: Router) {

  }
}
