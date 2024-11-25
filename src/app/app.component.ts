import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular11';
  messageToChild = 'Hello Child! This is from the parent.';
  receivedMessage = '';

  handleChildEvent(message: string) {
    this.receivedMessage = message;
  }
}
