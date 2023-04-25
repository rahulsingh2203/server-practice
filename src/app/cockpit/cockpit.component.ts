import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('svrCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('myName')
  myNameVariable!: ElementRef;

  @ViewChild('serverContent')
  myServerContent!: ElementRef;

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      //serverContent: this.newServerContent
      serverContent: this.myServerContent.nativeElement.value
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      //serverContent: this.newServerContent
      serverContent: this.myServerContent.nativeElement.value
    })
  }
  test1(data: HTMLInputElement) {
    alert(`${data.value}`)
  }
  test2() {
    alert(`${this.myNameVariable.nativeElement.value}`)
  }
}
