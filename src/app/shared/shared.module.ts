import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToShortTimeStringPipe } from './pipes/to-short-time-string.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ToShortDateStringPipe } from './pipes/to-short-date-string.pipe';
import { D3Module } from './d3/d3.module';


@NgModule({
  declarations: [
    ToShortTimeStringPipe,
    SpinnerComponent,
    ConfirmationDialogComponent,
    ToShortDateStringPipe,
  ],
  imports: [
  ],
  exports:[
    ToShortDateStringPipe,
    ToShortTimeStringPipe,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    D3Module
  ],
  providers:[
    ToShortDateStringPipe,
    ToShortTimeStringPipe
  ]
})
export class SharedModule { }
