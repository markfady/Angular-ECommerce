import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../productsInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
  getCategories(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products/categories')
  }
  getProductsOfCategory(category:string){
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)
  }
  getProductByID(id:any):Observable<Product>{
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }
}
