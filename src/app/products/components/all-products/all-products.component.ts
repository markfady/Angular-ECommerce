import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  title:string;
}

@Component({
  selector: 'pm-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  
  products: Product[] = [];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
 this.service.getAllProducts().subscribe((res:any)=>{
  this.products=res
  console.log(res)
 })
   
  }
}
