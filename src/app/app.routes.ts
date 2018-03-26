// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent }  from './welcome/welcome.component';
import { RegisterComponent }  from './register/register.component';
import { LoginComponent }  from './login/login.component';
import { CountryHomeComponent }  from './countryHome/countryHome.component';
import { FavoritesComponent }  from './favorites/favorites.component';
import { PageNotFoundComponent }  from './other/page_not_found.component';

// Route Configuration
const routes: Routes = [
	{path: 'welcome', component:WelcomeComponent},
	{path: 'register', component:RegisterComponent},
	{path: 'login', component:LoginComponent},
	{path: 'countryHome', component:CountryHomeComponent},
	{path: 'favorites', component:FavoritesComponent},
	{path: '', redirectTo: '/welcome', pathMatch:'full'},
	{path: '**', component: PageNotFoundComponent}
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {enableTracing: true, useHash: true});