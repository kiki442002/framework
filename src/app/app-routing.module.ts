import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RechercheComponent } from './recherche/recherche.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'formulaire', component: FormulaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
