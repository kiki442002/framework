import { Component, OnInit } from '@angular/core';
import { ComputerService, Computer } from '../computer.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  public NomPC: string = "";
  public computers: Computer[] = [];

  constructor(public computerservice: ComputerService) {}

  ngOnInit() {
    this.computerservice.getComputers().subscribe(
      (response: Computer[]) => {
        this.computers = response;
      },
      (error: any) => {
        console.error('Error fetching computers:', error);
      }
    );
  }
}
