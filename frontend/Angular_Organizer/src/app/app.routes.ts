import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sales'
  },
  {
    path: 'sales',
    loadComponent: () =>
      import('./features/sales/components/sales-index/sales-index').then(
        (module) => module.SalesIndexComponent
      )
  }
];
