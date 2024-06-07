import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { HeaderingComponent } from './components/headering/headering.component';
import { KARTYAK } from 'src/db-data';
import { Kartya } from './model/kartya';


export const routes = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  kartyak = KARTYAK;
  
  onKartyaSelected(kartya: Kartya) {
    console.log("App component - click event bubbled...", kartya)
  }

}
