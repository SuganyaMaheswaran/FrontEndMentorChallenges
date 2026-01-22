import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  faMoon = faMoon;
  constructor(private themeService:ThemeService){}
  toggleTheme(){
    // console.log("Togglebutton clicked")
    this.themeService.toggleTheme();
  }

}
