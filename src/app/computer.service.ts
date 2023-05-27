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
        this.createCardComponents();
      },
      (error: any) => {
        console.error('Error fetching computers:', error);
      }
    );
  }

  createCardComponents() {
    const parentElement = document.getElementById('bottom');
  
    if (!parentElement) {
      console.error("Parent element 'bottom' not found.");
      return;
    }
  
    this.computers.forEach(computer => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
  
      const imgElement = document.createElement('img');
      imgElement.className = 'card';
      imgElement.src = '../../assets/images/pc_test.jpg';
      imgElement.alt = 'pc_test';
      cardElement.appendChild(imgElement);
  
      const h3Element = document.createElement('h3');
      h3Element.className = 'feature';
      h3Element.textContent = computer.nom;
      cardElement.appendChild(h3Element);
  
      const systemElement = document.createElement('div');
      systemElement.className = 'feature';
      systemElement.textContent = `RAM: ${computer.system.ram} Go, CPU: ${computer.system.cpu.nom}, HDD: ${computer.system.hdd.capacite} Go`;
      cardElement.appendChild(systemElement);
  
      parentElement.appendChild(cardElement);
    });
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