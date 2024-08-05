import { Component, OnInit } from '@angular/core';
import { CartProduct, Product } from 'src/app/products/productsInterface';

@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:CartProduct[]=[]
  total:number=0
  constructor() { }

  ngOnInit(): void {
    this.getCartProducts()
  }
getCartProducts(){
  if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      this.getCartTotal()
      console.log(this.cartProducts)
  }
}
  getCartTotal(){
    this.total=0;
    for(let x in this.cartProducts){
      this.total+=this.cartProducts[x].quantity*this.cartProducts[x].item.price
    }
  }
  //save the incremented quantity value in the localStorage
  addAmout(index:number){
    this.cartProducts[index].quantity++
    this.getCartTotal() //to calculate the new total when the quantity value of product changes
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }
  minusAmout(index:number){
    this.cartProducts[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }
}
