import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AxesComponent } from './axes/axes.component';
import { CommunesComponent } from './communes/communes.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { EditMoComponent } from './edit-mo/edit-mo.component';
import { EditProvinceComponent } from './edit-province/edit-province.component';
import { EditStatutComponent } from './edit-statut/edit-statut.component';
import { MaitresOuvragesComponent } from './maitres-ouvrages/maitres-ouvrages.component';
import { NewProjetComponent } from './new-projet/new-projet.component';
import { NewSecteurComponent } from './new-secteur/new-secteur.component';
import { NouveauAxeComponent } from './nouveau-axe/nouveau-axe.component';
import { NouveauStatutComponent } from './nouveau-statut/nouveau-statut.component';
import { NouvelleCommuneComponent } from './nouvelle-commune/nouvelle-commune.component';
import { NouvelleMoComponent } from './nouvelle-mo/nouvelle-mo.component';
import { NouvelleProvinceComponent } from './nouvelle-province/nouvelle-province.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { SecteursComponent } from './secteurs/secteurs.component';
import { StatutsComponent } from './statuts/statuts.component';

const routes: Routes = [
  {path: "provinces",component: ProvincesComponent},
  {path: "secteurs",component: SecteursComponent},
  {path: "statuts",component: StatutsComponent},
  {path: "communes",component: CommunesComponent},
  {path: "axes",component: AxesComponent},
  {path: "projets",component: ProjetsComponent},
  {path: "new-province",component: NouvelleProvinceComponent},
  {path: "edit-province/:id",component: EditProvinceComponent},
  {path: "edit-commune/:id",component: EditComponentComponent},
  {path: "mos",component: MaitresOuvragesComponent},
  {path: "new-mo",component: NouvelleMoComponent},
  {path: "new-secteur",component: NewSecteurComponent},
  {path: "new-commune",component: NouvelleCommuneComponent},
  {path: "new-statut",component: NouveauStatutComponent},
  {path: "new-axe",component: NouveauAxeComponent},
  {path: "new-projet",component: NewProjetComponent},
  {path: "edit-mo/:id",component: EditMoComponent},
  {path: "edit-statut/:id",component: EditStatutComponent},
  {path: "", redirectTo : "/projets", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
