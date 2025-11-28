import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryItemComponent } from '../country-item/country-item.component';
import countriesData  from '../../../../../rest-countries-api-with-color-theme-switcher-master/data.json';
@Component({
  selector: 'app-country-list-view',
  imports: [CommonModule,CountryItemComponent],
  templateUrl: './country-list-view.component.html',
  styleUrl: './country-list-view.component.css'
})
export class CountryListViewComponent {
    countries:any[] = [];
    constructor(){
      this.countries = countriesData
    }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.countries)
  }


}
