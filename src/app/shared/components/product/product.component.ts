import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //sending data from parent to child using @Input()
@Input () item:any={}
//sending data from child to parent () using @output()
@Output() data=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  //now we can receive the data from child to this function
  add(){
    this.data.emit(this.item)
  }
}
