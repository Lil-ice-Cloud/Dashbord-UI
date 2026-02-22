import { Routes } from '@angular/router';
import {Dashboard} from './dashboard/dashboard';
import {Products} from './products/products';
import {Pages} from './pages/pages';

export const routes: Routes = [
 // { path: '', redirectTo: 'dashboard', pathMatch 'full' },
  { path: 'dashboard', component: Dashboard},
  { path: 'products', component: Products},
  { path: 'pages', component: Pages},
];
