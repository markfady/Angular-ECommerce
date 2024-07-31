import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pm-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  //this component is child when called inside any other component, so when we want to send data from parent to child we use @Input()
  @Input() title:string=""
  @Input() data:any[]=[]
  //now this method we want to send it from child to the parent we use @Output()
  @Output() selectedValue=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  detectChange(event:any){
    this.selectedValue.emit(event)
  }

}
