import { Component, OnInit } from '@angular/core';
import { CartProduct, Product } from 'src/app/products/productsInterface';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:CartProduct[]=[]
  total:number=0
  success:boolean=false
  constructor(private service:CartService) { }

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
  //takes the value passed from ngModel and set the change in local sotrage
  detectChange(){
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  //delete the item with specific index
  deleteProduct(index:number){
      this.cartProducts.splice(index,1)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  clearCart(){
    this.cartProducts=[]
    this.getCartTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  sendOrder(){
    //each item saved inside array and this array saved inside a big object'orderDetails'
    let products=this.cartProducts.map(order=>{
      return {productID:order.item.id,productName:order.item.title,quantity:order.quantity}
    })
    //send this object start with date of order and each item with it's quantity saved in it's array and all items arrays in order saved in one big object
    let Model=
    {
      date:new Date,
      orderDetails:products
    }
    this.service.createNewOrder(Model).subscribe(res=>{
      this.success=true
    })
    console.log(Model)
  }
}
