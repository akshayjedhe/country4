import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.html',
})
export class RegisterComponent  {

  constructor(private router: Router) { 
  }

  gotoLogin() : void {
  	this.router.navigateByUrl('/login');
  }
}