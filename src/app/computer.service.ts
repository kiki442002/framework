import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  API = [
    {
        "marque": "ASSER",
        "nom": "Respire TC10",
        "type": "fixe",
        "ecran": null,
        "clavier": null,
        "system": {
            "ram": 32,
            "cpu": {
                "marque":"INTELLE",
                "nom": "X9 900",
                "score": 25000,
                "core": 2,
                "frequence-max": 5900,
                "tdp": 125
            },
            "hdd": {
                "capacite": 3840,
                "type": "nvme",
                "rpm": null,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "NVADIA",
                "modele": "RTZ 3080",
                "score": 20000
            }
        },
        "batterie" : null,
        "prix": 1000
    }, 
    {
        "marque": "ASSER",
        "nom": "Respire TC2",
        "type": "fixe",
        "ecran": null,
        "clavier": null,
        "system": {
            "ram": 16,
            "cpu": {
                "marque":"INTELLE",
                "nom": "X3 300",
                "score": 12000,
                "core": 2,
                "frequence-max": 4200,
                "tdp": 65
            },
            "hdd": {
                "capacite": 1024,
                "type": "nvme",
                "rpm": null,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "NVADIA",
                "modele": "RTZ 3030",
                "score": 4000
            }
        },
        "batterie" : null,
        "prix": 300
    }, 
    {
        "marque": "ASSER",
        "nom": "Respire TC",
        "type": "fixe",
        "ecran": null,
        "clavier": null,
        "system": {
            "ram": 16,
            "cpu": {
                "marque":"AMDé",
                "nom": "B5 5000",
                "score": 15000,
                "core": 6,
                "frequence-max": 4200,
                "tdp": 65
            },
            "hdd": {
                "capacite": 1024,
                "type": "nvme",
                "rpm": null,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "NVADIA",
                "modele": "RTZ 3050",
                "score": 6500
            }
        },
        "batterie" : null,
        "prix": 500
    }, 
    {
        "marque": "ASSER",
        "nom": "Swif 15",
        "type": "portable",
        "ecran": {
            "taille": 15,
            "type": "TN",
            "dpi": 100
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": true,
            "type": "azerty",
            "pave-num": false
        },
        "system": {
            "ram": 16,
            "cpu": {
                "marque":"AMDé",
                "nom": "B5 550",
                "score": 12000,
                "core": 6,
                "frequence-max": 4200,
                "tdp": 25
            },
            "hdd": {
                "capacite": 1024,
                "type": "nvme",
                "rpm": null,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "NVADIA",
                "modele": "mtx 350",
                "score": 4000
            }
        },
        "batterie" : {
            "capacite": 55,
            "autonomie": 6
        },
        "prix": 900
    },      
    {
        "marque": "ASSER",
        "nom": "Swif 13",
        "type": "portable",
        "ecran": {
            "taille": 13,
            "type": "IPS",
            "dpi": 100
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": true,
            "type": "azerty",
            "pave-num": false
        },
        "system": {
            "ram": 16,
            "cpu": {
                "marque":"AMDé",
                "nom": "B5 550",
                "score": 12000,
                "core": 6,
                "frequence-max": 4200,
                "tdp": 25
            },
            "hdd": {
                "capacite": 1024,
                "type": "nvme",
                "rpm": null,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "NVADIA",
                "modele": "mtx 350",
                "score": 4000
            }
        },
        "batterie" : {
            "capacite": 55,
            "autonomie": 6
        },
        "prix": 900
    },    
    {
        "marque": "ASSER",
        "nom": "Swif 14",
        "type": "portable",
        "ecran": {
            "taille": 14,
            "type": "IPS",
            "dpi": 100
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": false,
            "type": "azerty",
            "pave-num": false
        },
        "system": {
            "ram": 16,
            "cpu": {
                "marque":"AMDé",
                "nom": "B3 500",
                "score": 7000,
                "core": 4,
                "frequence-max": 4000,
                "tdp": 15
            },
            "hdd": {
                "capacite": 1024,
                "type": "ssd",
                "rpm": null,
                "vitesse-transfert": 300
            },
            "cg": {
                "marque": "NVADIA",
                "modele": "RTZ 3050",
                "score": 6500
            }
        },
        "batterie" : {
            "capacite": 55,
            "autonomie": 4
        },
        "prix": 800
    },      
    {
        "marque": "ROJ",
        "nom": "Flow Z15",
        "type": "portable",
        "ecran": {
            "taille": 15,
            "type": "TN",
            "dpi": 100
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": true,
            "type": "azerty",
            "pave-num": true
        },
        "system": {
            "ram": 32,
            "cpu": {
                "marque":"AMDé",
                "nom": "B9 5000",
                "score": 20000,
                "core": 10,
                "frequence-max": 4400,
                "tdp": 45
            },
            "hdd": {
                "capacite": 3840,
                "type": "mvne",
                "rpm": null,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "NVADIA",
                "modele": "RTZ 3080",
                "score": 20000
            }
        },
        "batterie" : {
            "capacite": 65,
            "autonomie": 3
        },
        "prix": 1700
    },      
    {
        "marque": "ROJ",
        "nom": "Flow Z13",
        "type": "portable",
        "ecran": {
            "taille": 13,
            "type": "TN",
            "dpi": 100
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": true,
            "type": "azerty",
            "pave-num": false
        },
        "system": {
            "ram": 16,
            "cpu": {
                "marque":"AMDé",
                "nom": "B7 5000",
                "score": 17000,
                "core": 8,
                "frequence-max": 4400,
                "tdp": 45
            },
            "hdd": {
                "capacite": 2048,
                "type": "mvne",
                "rpm": null,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "NVADIA",
                "modele": "RTZ 3060",
                "score": 12000
            }
        },
        "batterie" : {
            "capacite": 55,
            "autonomie": 4
        },
        "prix": 1500
    },
    {
        "marque": "Azuss",
        "nom": "ZunBook 13",
        "type": "portable",
        "ecran": {
            "taille": 13,
            "type": "IPS",
            "dpi": 200
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": true,
            "type": "azerty",
            "pave-num": false
        },
        "system": {
            "ram": 16,
            "cpu": {
                "marque":"INTELLE",
                "nom": "X7 770Y",
                "score": 7500,
                "core": 4,
                "frequence-max": 3600,
                "tdp": 12
            },
            "hdd": {
                "capacite": 1024,
                "type": "mvne",
                "rpm": null,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "INTELLE",
                "modele": "HD IRIS",
                "score": 1500
            }
        },
        "batterie" : {
            "capacite": 55,
            "autonomie": 10
        },
        "prix": 1200
    },   
    {
        "marque": "Azuss",
        "nom": "ZunBook 12",
        "type": "portable",
        "ecran": {
            "taille": 12,
            "type": "IPS",
            "dpi": 100
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": true,
            "type": "azerty",
            "pave-num": false
        },
        "system": {
            "ram": 16,
            "cpu": {
                "marque":"INTELLE",
                "nom": "X5 550Y",
                "score": 6500,
                "core": 4,
                "frequence-max": 3600,
                "tdp": 10
            },
            "hdd": {
                "capacite": 256,
                "type": "mvne",
                "rpm": null,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "INTELLE",
                "modele": "HD IRIS",
                "score": 1500
            }
        },
        "batterie" : {
            "capacite": 45,
            "autonomie": 8
        },
        "prix": 900
    },  
    {
        "marque": "Azuss",
        "nom": "VivaBook 15",
        "type": "portable",
        "ecran": {
            "taille": 15,
            "type": "TN",
            "dpi": 72
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": false,
            "type": "azerty",
            "pave-num": true
        },
        "system": {
            "ram": 16,
            "cpu": {
                "marque":"INTELLE",
                "nom": "X5 550",
                "score": 7900,
                "core": 4,
                "frequence-max": 3600,
                "tdp": 25
            },
            "hdd": {
                "capacite": 2048,
                "type": "hdd",
                "rpm": 7200,
                "vitesse-transfert": 100
            },
            "cg": {
                "marque": "INTELLE",
                "modele": "HD 9000",
                "score": 395
            }
        },
        "batterie" : {
            "capacite": 58,
            "autonomie": 4
        },
        "prix": 700
    },
    {
        "marque": "Azuss",
        "nom": "VivaBook 14",
        "type": "portable",
        "ecran": {
            "taille": 14,
            "type": "TN",
            "dpi": 90
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": false,
            "type": "azerty",
            "pave-num": false
        },
        "system": {
            "ram": 8,
            "cpu": {
                "marque":"INTELLE",
                "nom": "X3 300",
                "score": 5200,
                "core": 2,
                "frequence-max": 3400,
                "tdp": 15
            },
            "hdd": {
                "capacite": 512,
                "type": "ssd",
                "rpm": null,
                "vitesse-transfert": 400
            },
            "cg": {
                "marque": "INTELLE",
                "modele": "HD 9000",
                "score": 395
            }
        },
        "batterie" : {
            "capacite": 45,
            "autonomie": 4
        },
        "prix": 700
    },
    {
        "marque": "Azuss",
        "nom": "VivaBook 11",
        "type": "portable",
        "ecran": {
            "taille": 11,
            "type": "TN",
            "dpi": 72
        },
        "clavier": {
            "chiclet": true,
            "retroeclairage": false,
            "type": "azerty",
            "pave-num": false
        },
        "system": {
            "ram": 4,
            "cpu": {
                "marque":"INTELLE",
                "nom": "ATAUM",
                "score": 1250,
                "core": 2,
                "frequence-max": 1900,
                "tdp": 5
            },
            "hdd": {
                "capacite": 256,
                "type": "mmc",
                "rpm": null,
                "vitesse-transfert": 50
            },
            "cg": {
                "marque": "INTELLE",
                "modele": "HD 9000",
                "score": 395
            }
        },
        "batterie" : {
            "capacite": 35,
            "autonomie": 5
        },
        "prix": 400
    }
]

  computers: Computer[] = [];

  constructor(private http: HttpClient) { }
  
  // getComputers() {
  //   return this.http.get<Computer[]>("https://my-json-server.typicode.com/Poubzs/computer/posts");
  // }
  // addComputersToPage() {
  //   this.getComputers().subscribe(
  //     (response: Computer[]) => {
  //       this.computers = response;
  //       console.log(this.computers); // You can access the fetched data here
  //     },
  //     (error: any) => {
  //       console.error('Error fetching computers:', error);
  //     }
  //   );
  // }
  getComputers() {
    return this.API
  }
  addComputersToPage() {
    this.computers = this.getComputers();
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