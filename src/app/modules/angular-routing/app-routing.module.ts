import { HomePageLayoutComponent } from './../../pages/home-page/home-page-layout/home-page-layout.component';
import { NotFoundComponent } from './../not-found/components/not-found/not-found.component';
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
        component: HomePageLayoutComponent,
      },
      {
        path: '404',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'ui/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], // force reload on same URL navigation
  exports: [RouterModule],
})
export class AppRoutingModule {}
