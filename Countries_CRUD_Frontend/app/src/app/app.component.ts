import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  
  imports: [ HeaderComponent, RouterOutlet ],
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
