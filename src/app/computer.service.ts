import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  computers: Computer[] = [];

  constructor(private http: HttpClient) { }
  
  getComputers() {
    return this.http.get<Computer[]>("https://my-json-server.typicode.com/Poubzs/computer");
  }

  addComputersToPage() {
    this.getComputers().subscribe(
      (response: Computer[]) => {
        this.computers = response;
        console.log(this.computers); // You can access the fetched data here
      },
      (error: any) => {
        console.error('Error fetching computers:', error);
      }
    );
  }
}

export interface Computer {
  marque: string,
  nom: string,
  type: string,
  ecran: any,
  clavier: any,
  system: {
    ram: number,
    cpu: {
      marque: string,
      nom: string,
      score: number,
      core: number,
      "frequence-max": number,
      tdp: number
    },
    hdd: {
      capacite: number,
      type: string,
      rpm: any,
      "vitesse-transfert": number
    },
    cg: {
      marque: string,
      modele: string,
      score: number
    }
  },
  batterie: any,
  prix: number
}