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
}
