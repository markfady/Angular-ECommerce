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
addItem:boolean=false
amount:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  //now we can receive the data from child to this function
  add(){ //make object item composed of item key , quantity key.
    this.data.emit({item:this.item,quantity:this.amount})
  }
}
