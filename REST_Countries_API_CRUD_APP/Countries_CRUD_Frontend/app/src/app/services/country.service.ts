import { Injectable } from '@angular/core';
import data from '../data/data.json';
import { Country } from '../models/country.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries: Country[] = data as Country[];
  private filteredCountriesSubject=  new BehaviorSubject<Country []>([...this.countries]);
  //public property that components can subscribe to 
  filteredCountries$: Observable<Country[]> = this.filteredCountriesSubject.asObservable();
  
  constructor() { }


  /** Filter countries by region */
  filterByRegion(region:string){
     let  filteredList: Country[] = region ? this.countries.filter(c=>c.region.toLowerCase()===region.toLowerCase()) : [...this.countries];
    this.filteredCountriesSubject.next(filteredList);
  }

  /** Search countries by name */
  search(term: string){
    let filteredCountries:Country [] = term ? this.countries.filter(c=> c.name.toLowerCase().includes(term.toLowerCase())):[...this.countries];
    console.log(filteredCountries)
    this.filteredCountriesSubject.next(filteredCountries);
 
  }

  /** Find a country by its alpha3Code */
  getByAlpha3Code(code: string){
    let filteredCountry: Country [] = code ? [this.countries.find(c=>c.alpha2Code.toLowerCase() ===code.toLowerCase() || c.alpha3Code.toLowerCase() === code.toLowerCase())].filter(Boolean) as Country[]: [...this.countries];
    this.filteredCountriesSubject.next(filteredCountry);
  
  }
  reset(){
    this.filteredCountriesSubject.next([...this.countries])
  }

}
;