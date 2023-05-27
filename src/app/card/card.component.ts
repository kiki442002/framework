import { Component, Input } from '@angular/core';
import { Computer } from '../computer.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() computer: Computer;
  constructor() {
    this.computer = {} as Computer;
  }
}
