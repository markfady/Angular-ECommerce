import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule //add routerModule here cause shared is called inside app module so the routing works 
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
