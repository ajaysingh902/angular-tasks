import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  @Output() public emitor=new EventEmitter();
  public comp2()
  {
    this.emitor.emit("this is the message from 3rd component");
  }
  constructor() { }

  ngOnInit() {
  }

}
