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
  categories:any[]=[];
  loading:boolean=false

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.filteredCategories()
  }

  //subscribe to get all products
  getProducts(){
    this.loading=true
    this.service.getAllProducts().subscribe((res:any)=>{
    this.products=res
    this.loading=false
    },error=>{
      this.loading=true
      console.log(error)
    })

  }
  //subscribe to get the category names and loop on it inside the select statement
  filteredCategories(){
    this.loading=true
    this.service.getCategories().subscribe((res:any)=>{
      this.categories=res
      this.loading=false
      console.log(res)
    },error=>{
      this.loading=true
      console.log(error)
    })
  }
  //know what category user selected
  filterProductsByCategory(event:any){
    this.loading=true
  let value=event.target.value
  value==="All"?this.getProducts() :  this.getProductOfCategory(value)
  }
  //pass the selected category to the service
  getProductOfCategory(category:string){
    this.loading=true
    this.service.getProductsOfCategory(category).subscribe(res=>{
      this.loading=false
      this.products=res
    })
  }
}
