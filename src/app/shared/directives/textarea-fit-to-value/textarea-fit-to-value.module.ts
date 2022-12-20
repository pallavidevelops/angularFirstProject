import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaFitToValueDirective } from './textarea-fit-to-value.directive';



@NgModule({
  declarations: [
    TextareaFitToValueDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextareaFitToValueDirective
  ]
})
export class TextareaFitToValueModule { }
