import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() messageFromParent!: string; // Input from parent
  @Output() notifyParent = new EventEmitter<string>(); // Output to parent

  sendMessage() {
    this.notifyParent.emit('Hello Parent! This is from the child.');
  }
}
