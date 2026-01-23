import { Component, Input } from '@angular/core';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() country?:Country; 

}
