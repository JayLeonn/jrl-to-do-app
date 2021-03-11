import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { AngularMaterialModule } from '../angular-material/angular.material.module';

@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ConfirmationDialogComponent]
})
export class ConfirmationDialogModule {}
