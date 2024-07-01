import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class CartModule { }
