import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail page";
  product : IProduct | undefined;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    //Read route parameter
   const id : number = Number(this.route.snapshot.paramMap.get('id')) ;
   console.log('route id from Url',id);
  }

  backToProductListPage(): void{
    this.router.navigate(['/products']);
  }

}
