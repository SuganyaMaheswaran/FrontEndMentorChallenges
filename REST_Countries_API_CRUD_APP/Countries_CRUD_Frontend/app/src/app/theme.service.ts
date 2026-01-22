import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // BehaviourSubject keeps track of current theme and allows components to subscibe
  private darkTheme = new BehaviorSubject<boolean>(false);

  currentTheme$ = this.darkTheme.asObservable();
  
  toggleTheme(){
    console.log("toggleTheme working")
    const isDark = !this.darkTheme.value; 
    this.darkTheme.next(isDark);
   }
   
  get isDarkTheme(){
    return this.darkTheme.value;
  }
}
