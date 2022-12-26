import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ],
  imports: [
    CommonModule,
     RouterModule.forChild([
      {path :'products', component: ProductListComponent},
      {
        path :'products/:id',
        canActivate:[ProductDetailGuard],
        component: ProductDetailComponent
      },
    ]),
     SharedModule
  ]
})
export class ProductModule { }
