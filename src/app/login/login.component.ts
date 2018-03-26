import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.html',
})
export class LoginComponent  {

  constructor(private router: Router) { 
  }

  gotoCountry() : void {
  	this.router.navigateByUrl('/countryHome');
  }
}