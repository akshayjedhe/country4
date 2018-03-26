import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryDataService {
	constructor(private http : Http,){

	}

	getCountryData(){
		return this.http.get('../assets/json/countryInfo.json')
			.map(res => res.json());
	}
}