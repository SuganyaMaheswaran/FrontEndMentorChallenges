import { Component, ElementRef, Host, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';
@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  
  region = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  dropdownOpen = false;
  @ViewChild('dropdownRegion') dropdownRegion !: ElementRef;
  selectedRegion = '';
  constructor(private countryService: CountryService){}
  toggleDropdown(){
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event){
    if(!this.dropdownRegion) return; 
    const clickInside = this.dropdownRegion.nativeElement.contains(event.target)
    if(!clickInside)
      this.dropdownOpen = false;
  }
  onFilterChange(region:string){
    this.selectedRegion = region;
    this.countryService.filterByRegion(this.selectedRegion);
    this.dropdownOpen = false; 
  }
}
