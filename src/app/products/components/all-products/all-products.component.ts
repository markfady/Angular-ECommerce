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
  
  products!: Observable<Product[]> ;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.getAllProducts();
  }
}
