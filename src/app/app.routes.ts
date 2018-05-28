import { RouterModule, Routes } from '@angular/router';
import { AddVinyilComponent } from './components/vinyls/add-vinyil.component';
import { VinylsComponent } from './components/vinyls/vinyls.component';


const app_routes: Routes = [
  { path: 'add-vinyil/:id', component: AddVinyilComponent },
  { path: 'vinyls', component: VinylsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'vinyls' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
