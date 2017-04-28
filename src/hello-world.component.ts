import { Component } from '@angular/core';

@Component({
  selector: 'state-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'ngx-state';
}
