import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', // path: /
    pathMatch: 'full',
    redirectTo: 'ui',
  },
  {
    path: 'ui',
    pathMatch: 'prefix',
    children: [
      {
        path: '', // path: /ui/
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home', // path: /ui/home
        component: AppComponent,
      },
    ],
  },
/*   {
    path: '404',
    component: TODO: add 404 component,
  },
  {
    path: '**',
    redirectTo: 'ui/404',
    pathMatch: 'full',
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' } )], // force reload on same URL navigation
  exports: [RouterModule],
})
export class AppRoutingModule {}
