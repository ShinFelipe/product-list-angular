import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Photo } from './components/photo/photo';

export const routes: Routes = [
  {
    path: '',
    component: Photo,
  },
  {
    path: 'home',
    component: Home,
  },
];
