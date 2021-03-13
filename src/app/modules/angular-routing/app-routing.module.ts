import { HomePageLayoutComponent } from './../../pages/home-page/home-page-layout/home-page-layout.component';
import { NotFoundComponent } from './../not-found/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', // path: /
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home', // path: /home
    component: HomePageLayoutComponent,
  },
  {
    path: '404', // path: /404
    component: NotFoundComponent,
  },
  {
    path: '**', // path: any path that doesn't match above
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], // force reload on same URL navigation
  exports: [RouterModule],
})
export class AppRoutingModule {}
