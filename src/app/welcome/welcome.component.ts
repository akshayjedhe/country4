import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './welcome.html',
})
export class WelcomeComponent  {

  constructor(private router: Router) { 
  }

  gotoRegister() : void {
  	this.router.navigateByUrl('/register');
  }
}