import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card-container',
  imports: [CardComponent, CommonModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {
    countries$ :Observable<Country[]>;
    constructor(private countryService: CountryService){
      this.countries$ = this.countryService.filteredCountries$;
    }
    
    ngOnInit(){
   
    }

    

}
