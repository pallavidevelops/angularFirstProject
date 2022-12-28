import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
import { Route, RouterModule } from '@angular/router';

const loginRoutes : Route[]=[
{ path:'login', component: LoginComponent},
// { path:'logout', redirectTo: '/welcome', pathMatch:'full'}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
