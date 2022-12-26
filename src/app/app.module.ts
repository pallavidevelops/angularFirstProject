import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './products/product.module';

const routes : Routes =  [
  {path :'welcome', component: WelcomeComponent},
  {path: '',redirectTo:'welcome', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
 
}
