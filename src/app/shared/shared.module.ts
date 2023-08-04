import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToShortTimeStringPipe } from './pipes/to-short-time-string.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToShortTimeStringPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports:[
    ToShortTimeStringPipe,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
