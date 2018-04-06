import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routes'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent }  from './register/register.component';
import { LoginComponent }  from './login/login.component';
import { CountryHomeComponent }  from './countryHome/countryHome.component';
import { FavoritesComponent }  from './favorites/favorites.component';
import { PageNotFoundComponent }  from './other/page_not_found.component';
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing, Daterangepicker ],
  declarations: [ AppComponent, WelcomeComponent, RegisterComponent, LoginComponent, CountryHomeComponent, FavoritesComponent, PageNotFoundComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
