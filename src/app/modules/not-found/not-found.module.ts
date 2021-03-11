import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularMaterialModule } from '../angular-material/angular.material.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
