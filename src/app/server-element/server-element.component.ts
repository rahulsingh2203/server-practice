import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges{
  //sign: string;
  @Input('srvElement') element: { type: string, name: string, content: string } = {
    type: 'dummytype',
    name: 'dummytest',
    content: 'dummycontent'
  };

  constructor(){
    console.log(`constructor is called!`);
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(`OnChanges is called!`);
    console.log(changes);
  }
  ngOnInit(){
    console.log(`ngOnInit is called!`);
  }
}
