import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ThemeService } from './theme.service';
import { SearchComponent } from './search/search.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchComponent],
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
