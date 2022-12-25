import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector :'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product List';
    imageWidth : number = 50;
    imageMargin :number = 2;
    showImage : boolean = false;
    filterBy :string = '';
    //products : any
    productSubscription!: Subscription;
    products : IProduct[] | undefined ;
    filteredProducts : IProduct[] | undefined ;
    constructor(private _productService: ProductService){
    }
    ngOnInit(): void {
     this.productSubscription = this._productService.getProducts()
      .subscribe({
        next: products => { 
          this.products = products;
           this.filteredProducts = this.products;
          },
        error:  err => this.pageTitle = "Error Loading Products"
      })

       
    }

    filterProducts(filterBy :string): void {
      filterBy = filterBy.toLowerCase();
      this.filteredProducts = this.products?.filter((product : IProduct) =>
      product.productName.toLowerCase().includes(filterBy));
      console.log(this.filteredProducts);
    }
      toggleImage():void{
        this.showImage = !this.showImage;
      }

      onRatingChange(message: string):void{
        this.pageTitle = message;
      }

      ngOnDestroy(){
        this.productSubscription.unsubscribe();
      }
}