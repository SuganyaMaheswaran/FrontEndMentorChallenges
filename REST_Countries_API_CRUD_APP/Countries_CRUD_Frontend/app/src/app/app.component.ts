import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { ThemeService } from './services/theme.service';
import { SearchComponent } from './component/search/search.component';
import { FilterComponent } from "./component/filter/filter.component";
import { CardContainerComponent } from './component/card-container/card-container.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, SearchComponent, FilterComponent, CardContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Country Explorer';
  constructor(private themeService: ThemeService){}
  ngOnInit(){
    this.themeService.currentTheme$.subscribe(isDark=>{
      isDark? document.documentElement.setAttribute('data-theme', 'dark-theme'):document.documentElement.removeAttribute('data-theme');
    })
  }

}
