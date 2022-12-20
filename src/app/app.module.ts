import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { TextareaFitToValueModule } from './shared/directives/textarea-fit-to-value/textarea-fit-to-value.module';
import { ReplaceCharWithSpace } from './shared/replaceCharWithSpace';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReplaceCharWithSpace,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextareaFitToValueModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
