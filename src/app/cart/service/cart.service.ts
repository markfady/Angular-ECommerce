import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  createNewOrder(model:any){
    return this.http.post(`https://fakestoreapi.com/products`,model)
  }
}
