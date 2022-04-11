import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { NouvelleProvinceComponent } from './nouvelle-province/nouvelle-province.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { EditProvinceComponent } from './edit-province/edit-province.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MaitresOuvragesComponent } from './maitres-ouvrages/maitres-ouvrages.component';
import { NouvelleMoComponent } from './nouvelle-mo/nouvelle-mo.component';
import { EditMoComponent } from './edit-mo/edit-mo.component';
import { StatutsComponent } from './statuts/statuts.component';
import { NouveauStatutComponent } from './nouveau-statut/nouveau-statut.component';
import { EditStatutComponent } from './edit-statut/edit-statut.component';
import { CommunesComponent } from './communes/communes.component';
import { NouvelleCommuneComponent } from './nouvelle-commune/nouvelle-commune.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { AxesComponent } from './axes/axes.component';
import { NouveauAxeComponent } from './nouveau-axe/nouveau-axe.component';
import { ProjetsComponent } from './projets/projets.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvincesComponent,
    NouvelleProvinceComponent,
    EditProvinceComponent,
    MaitresOuvragesComponent,
    NouvelleMoComponent,
    EditMoComponent,
    StatutsComponent,
    NouveauStatutComponent,
    EditStatutComponent,
    CommunesComponent,
    NouvelleCommuneComponent,
    EditComponentComponent,
    AxesComponent,
    NouveauAxeComponent,
    ProjetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
