import { Routes } from '@angular/router';
import {Dashboard} from './dashboard/dashboard';
import {Products} from './products/products';
import {Settings} from './settings/settings';
import {Pages} from './pages/pages';

export const routes: Routes = [
 // { path: '', redirectTo: 'dashboard', pathMatch 'full' },
  { path: 'dashboard', component: Dashboard},
  { path: 'products', component: Products},
  { path: 'settings', component: Settings},
  { path: 'pages', component: Pages},
];
