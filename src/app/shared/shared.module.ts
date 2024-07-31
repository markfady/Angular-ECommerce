import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AllProductsComponent } from '../products/components/all-products/all-products.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule //add routerModule here cause shared is called inside app module so the routing works 
  ],
  exports:[HeaderComponent,SpinnerComponent,SelectComponent,ProductComponent]
})
export class SharedModule { }
