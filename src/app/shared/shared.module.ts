import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToShortTimeStringPipe } from './pipes/to-short-time-string.pipe';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ToShortTimeStringPipe
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    ToShortTimeStringPipe,
    CommonModule,
    BrowserModule
  ]
})
export class SharedModule { }
