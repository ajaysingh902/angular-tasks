import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-compenent2',
  templateUrl: './compenent2.component.html',
  styleUrls: ['./compenent2.component.css']
})
export class Compenent2Component implements OnInit {
//  @input public name;
@Input() public printit;
@Output() public childevent=new EventEmitter();
public emiitorfunction()
{
  this.childevent.emit('dekhte hai kya nhoga iska');
}

  constructor() { }

  ngOnInit() {
  }

}
