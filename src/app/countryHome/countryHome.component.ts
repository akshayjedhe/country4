import { Component } from '@angular/core';
import { CountryDataService } from '../services/countryData.service';

@Component({
  templateUrl: './countryHome.html',
  providers: [ CountryDataService ]
})
export class CountryHomeComponent  {

  country;

  constructor(private countryDataService: CountryDataService) { 
    countryDataService.getCountryData().subscribe(countries => {
      this.country = countries;
      console.log('data'+this.country);
    });
  }
}