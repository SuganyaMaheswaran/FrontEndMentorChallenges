import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryListViewComponent } from "./country-list-view/country-list-view.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CountryListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
