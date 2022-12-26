import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap, throwError } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn : 'root'
})
export class ProductService {
  productUrl : string = "api/products/products.json";
  constructor (private http : HttpClient){}

getProducts(): Observable<IProduct[]>{
return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log('products',JSON.stringify(data)))
      // catchError()
      )
}
getProduct(id: number): Observable<IProduct> {
  if (id === 0) {
    return of(this.initializeProduct());
  }
  const url = `${this.productUrl}/${id}`;
  return this.http.get<IProduct>(url)
    .pipe(
      tap(data => console.log('getProduct: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
}

createProduct(product: IProduct): Observable<IProduct> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // Required for the in memory web API to assign a unique id
  product.id = null;
  return this.http.post<IProduct>(this.productUrl, product, { headers })
    .pipe(
      tap(data => console.log('createProduct: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
}

deleteProduct(id: number): Observable<{}> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.productUrl}/${id}`;
  return this.http.delete<IProduct>(url, { headers })
    .pipe(
      tap(data => console.log('deleteProduct: ' + id)),
      catchError(this.handleError)
    );
}

updateProduct(product: IProduct): Observable<IProduct> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.productUrl}/${product.id}`;
  return this.http.put<IProduct>(url, product, { headers })
    .pipe(
      tap(() => console.log('updateProduct: ' + product.id)),
      // Return the product on an update
      map(() => product),
      catchError(this.handleError)
    );
}

private handleError(err: HttpErrorResponse): Observable<never> {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage: string;
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Backend returned code ${err.status}: ${err.message}`;
  }
  console.error(err);
  return throwError(() => errorMessage);
}

private initializeProduct(): IProduct {
  // Return an initialized object
  return {
    id: 0,
    productName: '',
    productCode: '',
    category: '',
    tags: [],
    releaseDate: '',
    price: 0,
    description: '',
    starRating: 0,
    imageUrl: ''
  };
}
      
}