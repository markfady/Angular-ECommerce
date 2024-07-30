import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Observable } from 'rxjs';
import { Product } from '../../productsInterface';


@Component({
  selector: 'pm-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  
  products: Product[] = [];
  categories:any[]=[]

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.filteredCategories()
  }

  //subscribe to get all products
  getProducts(){

    this.service.getAllProducts().subscribe((res:any)=>{
    this.products=res
    },error=>{
      console.log(error)
    })

  }
  //subscribe to get the category names and loop on it inside the select statement
  filteredCategories(){
    this.service.getCategories().subscribe((res:any)=>{
      this.categories=res
      console.log(res)
    },error=>{
      console.log(error)
    })
  }
}
