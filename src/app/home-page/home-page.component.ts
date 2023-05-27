import { Component } from '@angular/core';
import { ComputerService, Computer } from '../computer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  desktopComputers: Computer[] = [];
  constructor(private computerService: ComputerService) {
    this.desktopComputers = this.computerService.getComputers().filter(computer => computer.type === 'fixe');
  }
}
