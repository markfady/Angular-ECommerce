import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //sending data from parent to child using @Input()
@Input () item:any={}
  constructor() { }

  ngOnInit(): void {
  }

}
