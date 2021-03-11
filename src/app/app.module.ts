import { NotFoundModule } from './modules/not-found/not-found.module';
/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/angular-routing/app-routing.module';
import { AngularMaterialModule } from './modules/angular-material/angular.material.module';
import { HomePageLayoutComponent } from './pages/home-page/home-page-layout/home-page-layout.component';

/* Global Components */


/* Home page components */
@NgModule({
  declarations: [
    AppComponent,
    HomePageLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
