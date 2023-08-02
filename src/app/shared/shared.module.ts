import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToShortTimeStringPipe } from './pipes/to-short-time-string.pipe';



@NgModule({
  declarations: [
    ToShortTimeStringPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToShortTimeStringPipe
  ]
})
export class SharedModule { }
