import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { TextareaFitToValueModule } from './directives/textarea-fit-to-value/textarea-fit-to-value.module';
import { ReplaceCharWithSpace } from './replaceCharWithSpace';



@NgModule({
  declarations: [
    StarComponent,
    ReplaceCharWithSpace
  ],
  imports: [
    CommonModule,
    TextareaFitToValueModule
  ],
exports:[
  CommonModule,
  FormsModule,
  StarComponent,
  TextareaFitToValueModule,
  ReplaceCharWithSpace
]
})
export class SharedModule { }
