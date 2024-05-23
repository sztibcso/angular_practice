import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kartya } from 'src/app/model/kartya';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input()
  kartya: Kartya;

  // @Input({required: true})
  // index: number;

  @Output('kartyaSelected')
  kartyaEmitter = new EventEmitter<Kartya>();

  ngOnInit(): void {
    
  }

  onKartyaViewed() {
    console.log("card component - button clicked...")

    this.kartyaEmitter.emit(this.kartya);
  }

}
