import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../productsInterface';

@Component({
  selector: 'pm-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id:any
  productDetails!:Product; // Changed from Product[] to Product
  constructor(private route:ActivatedRoute,private service:ProductsService) {
      this.id=route.snapshot.paramMap.get('id');
      console.log(this.id)
   }

  ngOnInit(): void {
    this.getProductDetails(this.id)
  }
//response from getProductByID is a single Product object, not an array. Therefore, handle the response accordingly

 getProductDetails(id: any): void {
  this.service.getProductByID(id).subscribe((res:Product) => {
    this.productDetails = res; // Directly assign the response object
    console.log(res);
  });
}
}

