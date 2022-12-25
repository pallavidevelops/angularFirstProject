import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { TextareaFitToValueModule } from './shared/directives/textarea-fit-to-value/textarea-fit-to-value.module';
import { ReplaceCharWithSpace } from './shared/replaceCharWithSpace';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

const routes : Routes =  [
  {path :'products', component: ProductListComponent},
  {
    path :'products/:id',
    canActivate:[ProductDetailGuard],
    component: ProductDetailComponent
  },
  {path :'welcome', component: WelcomeComponent},
  {path: '',redirectTo:'welcome', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReplaceCharWithSpace,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TextareaFitToValueModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
 
}
