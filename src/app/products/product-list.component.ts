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
    // filterBy :string = '';
    //products : any
    productSubscription!: Subscription;
    products : IProduct[] | undefined ;
    filteredProducts : IProduct[] | undefined ;
    private _filterBy = '';
    get filterBy(): string {
      return this._filterBy;
    }
    set filterBy(value: string) {
      this._filterBy = value;
      this.filteredProducts = this.filterProducts(value);
    }
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

    filterProducts(filterBy :string): IProduct[] | undefined  {
      filterBy = filterBy.toLowerCase();

      let list = this.products?.filter((product : IProduct) =>
      product.productName.toLowerCase().includes(filterBy));
      
      console.log(this.filteredProducts);
      return list;

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