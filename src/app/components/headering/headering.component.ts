import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * @title Basic toolbar
 */
@Component({
  selector: 'app-headering',
  templateUrl: './headering.component.html',
  styleUrls: ['./headering.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class HeaderingComponent {

}
