import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RechercheComponent } from './recherche/recherche.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ButtonCardComponent } from './button-card/button-card.component';
import { QuestionComponent } from './question/question.component';
import { FiltreComponent } from './filtre/filtre.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RechercheComponent,
    FormulaireComponent,
    FooterComponent,
    NavigationComponent,
    ButtonComponent,
    CardComponent,
    ButtonCardComponent,
    QuestionComponent,
    FiltreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
