import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmationInput {
  headerText: string;
  cancelText: string;
  submitText: string;
  bodyText?: string;
}

@Component({
  selector: 'upm-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css'],
})
export class ConfirmationDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public input: ConfirmationInput
  ) {}

  ngOnInit(): void {}

  closeDialog(confirmation: boolean): void {
    this.dialogRef.close(confirmation);
  }
}
