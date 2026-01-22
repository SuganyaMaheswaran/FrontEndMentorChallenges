import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  region = ['Africa', 'America', 'Asia', 'Europe', 'Oceania' ];
  dropdownOpen = false;
  selectedRegion = '';

  toggleDropdown(){
    this.dropdownOpen = !this.dropdownOpen;
    console.log("ToggleDropDown : ", this.dropdownOpen)
  }

  onFilterChange(region:string){
    this.selectedRegion = region;
    this.dropdownOpen = false; 
  }
}
