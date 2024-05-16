import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { HeaderingComponent } from './components/headering/headering.component';

export const routes = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-application';
}
