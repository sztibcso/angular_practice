import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css'],
})
export class ProfileDataComponent {
  val1 = 'Veg Bela';
  val2 = 'Nyu Jork';
  val3 = 'Hihetetlen korter 16/huszonharmincezertapodtattizketto';
  val4 = '+36 1 234 5678';
  val5 = 'pelda@kiralysag.hu';

}
