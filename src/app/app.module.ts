import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'products',component:AllProductsComponent},
  {path:'details/:id',component:ProductsDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'**',redirectTo:'products',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [ //Must import all other modules here so in each module we can use *ngFor
    CommonModule,
    BrowserModule,
    ProductsModule,
    CartModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
