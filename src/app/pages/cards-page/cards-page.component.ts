import { Component } from '@angular/core';
import { Kartya } from 'src/app/model/kartya';
import { KARTYAK } from 'src/db-data';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.css'
})
export class CardsPageComponent {
  kartyak = KARTYAK;
  
  onKartyaSelected(kartya: Kartya) {
    console.log("App component - click event bubbled...", kartya)
  }
}
