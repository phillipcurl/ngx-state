import { Component } from '@angular/core';
import { ReactiveState } from './../src';

@Component({
  selector: 'state-demo-app',
  template: `
    <div>
      <button (click)="onClick()" class="btn btn-default">CLICK ME</button>
    </div>
  `
})
export class DemoComponent {
  count: number = 0;

  constructor(private _state: ReactiveState) {
    this._state.subscribe('buttonClick', (data) => {
      if (data) {
        alert(data);
      }
    });
  }

  onClick() {
    this.count++;
    this._state.notifyDataChanged('buttonClick', `The current count is: ${this.count}`);
  }
}
