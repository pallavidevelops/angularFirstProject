import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector :'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth : number = 50;
    imageMargin :number = 2;
    showImage : boolean = false;
    filterBy :string = '';
    //products : any
    products : IProduct[] | undefined ;
    filteredProducts : IProduct[] | undefined ;
    constructor(private _productService: ProductService){
      this.products = _productService.getProducts();
    }
    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
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
}