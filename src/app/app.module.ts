import { TaskDetailsComponent } from './pages/home-page/task-details/task-details.component';
/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/angular-routing/app-routing.module';
import { AngularMaterialModule } from './modules/angular-material/angular.material.module';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { ConfirmationDialogModule } from './modules/confirmation-dialog/confirmation-dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Global Components */


/* Home page components */
import { HomePageLayoutComponent } from './pages/home-page/home-page-layout/home-page-layout.component';
import { CreateTaskComponent } from './pages/home-page/create-task/create-task.component';
import { ListOfTasksComponent } from './pages/home-page/list-of-tasks/list-of-tasks.component';
import { NewTaskComponent } from './pages/home-page/new-task/new-task.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageLayoutComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    ListOfTasksComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NotFoundModule,
    ConfirmationDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-FI' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
