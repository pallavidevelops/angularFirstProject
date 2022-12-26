import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './products/product.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { MessageModule } from './messages/message.module';
import { UserModule } from './user/user.module';

const routes : Routes =  [
  {path :'welcome', component: WelcomeComponent},
  {path: '',redirectTo:'welcome', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule,
    UserModule,
    MessageModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
 
}
