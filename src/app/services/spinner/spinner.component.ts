import { DialogConfig } from '@angular/cdk/dialog';
import { Component, Inject, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DialogOptions } from 'src/app/shared/material/DialogOptions';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  message = "Spinning"

  constructor(private dialogRef: MatDialogRef<SpinnerComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogOptions)
  {
      this.message = data.message
  }

  closeDialog(): void {
    this.dialogRef.close()
  }
}
