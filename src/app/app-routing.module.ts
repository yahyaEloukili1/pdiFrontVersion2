import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AxesComponent } from './axes/axes.component';
import { CommunesComponent } from './communes/communes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { EditMoComponent } from './edit-mo/edit-mo.component';
import { EditProjetComponent } from './edit-projet/edit-projet.component';
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
import { LoginComponent } from './login/login.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { SecteursComponent } from './secteurs/secteurs.component';
import { StatutsComponent } from './statuts/statuts.component';
import { AuthGuard } from './auth.guard';
import { EditAxeComponent } from './edit-axe/edit-axe.component';
import { EditSecteurComponent } from './edit-secteur/edit-secteur.component';

const routes: Routes = [
  {path: "pdi/provinces",component: ProvincesComponent,canActivate: [AuthGuard]},
  {path: "pdi/secteurs",component: SecteursComponent,canActivate: [AuthGuard]},
  {path: "pdi/statuts",component: StatutsComponent,canActivate: [AuthGuard]},
  {path: "pdi/communes",component: CommunesComponent,canActivate: [AuthGuard]},
  {path: "pdi/axes",component: AxesComponent,canActivate: [AuthGuard]},
  {path: "pdi/projets",component: ProjetsComponent,canActivate: [AuthGuard]},
  {path: "pdi/new-province",component: NouvelleProvinceComponent,canActivate: [AuthGuard]},
  {path: "pdi/edit-province/:id",component: EditProvinceComponent,canActivate: [AuthGuard]},
  {path: "pdi/edit-axe/:id",component: EditAxeComponent,canActivate: [AuthGuard]},
  {path: "pdi/edit-commune/:id",component: EditComponentComponent,canActivate: [AuthGuard]},
  {path: "pdi/mos",component: MaitresOuvragesComponent,canActivate: [AuthGuard]},
  {path: "pdi/new-mo",component: NouvelleMoComponent,canActivate: [AuthGuard]},
  {path: "pdi/new-secteur",component: NewSecteurComponent,canActivate: [AuthGuard]},
  {path: "pdi/new-commune",component: NouvelleCommuneComponent,canActivate: [AuthGuard]},
  {path: "pdi/new-statut",component: NouveauStatutComponent,canActivate: [AuthGuard]},
  {path: "pdi/new-axe",component: NouveauAxeComponent,canActivate: [AuthGuard]},
  {path: "pdi/new-projet",component: NewProjetComponent,canActivate: [AuthGuard]},
  {path: "pdi/dashboard",component: DashboardComponent,canActivate: [AuthGuard]},
  {path: "pdi/login",component: LoginComponent},
  {path: "pdi/edit-mo/:id",component: EditMoComponent,canActivate: [AuthGuard]},
  {path: "pdi/edit-projet/:id",component: EditProjetComponent,canActivate: [AuthGuard]},
  {path: "pdi/edit-statut/:id",component: EditStatutComponent,canActivate: [AuthGuard]},
  {path: "pdi/edit-secteur/:id",component: EditSecteurComponent,canActivate: [AuthGuard]},
  {path: "pdi", redirectTo : "pdi/projets", pathMatch: 'full'},
  {path: "", redirectTo : "pdi/projets", pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
