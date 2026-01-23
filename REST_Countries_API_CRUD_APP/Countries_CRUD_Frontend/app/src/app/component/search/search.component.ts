import { Component, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CountryService } from '../../services/country.service';
import { FormsModule } from '@angular/forms'; // <-- import this
@Component({
  selector: 'app-search',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  faSearch = faSearch;
  searchTerm:string = '';

  constructor(private countryService: CountryService){}

  onSearch():void{
    this.countryService.search(this.searchTerm);
    
  }

}
