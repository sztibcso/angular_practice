import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dinput',
  templateUrl: './dinput.component.html',
  styleUrl: './dinput.component.css',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class DinputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  updateValue(value){
    this.value = value;
    this.valueChange.emit(value);
  }
}
