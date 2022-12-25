import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn : 'root'
})
export class ProductService {
  productUrl : string = "api/products/products.json";
  constructor (private http : HttpClient){}
getProducts_old():IProduct[]{
    return [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2021",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2021",
          "description": "Leaf rake with 48-inch wooden handle. Leaf rake with 48-inch wooden handle.",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2021",
          "description": "Leaf rake with 48-inch wooden handle. Leaf rake with 48-inch wooden handle.Leaf rake with 48-inch wooden handle.",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2021",
          "description": "",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        }];
}
getProducts(): Observable<IProduct[]>{
return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log('products',JSON.stringify(data)))
      // catchError()
      )
}
       
}