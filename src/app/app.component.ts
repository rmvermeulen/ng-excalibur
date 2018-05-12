import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div id="container">
      <h3 id="title" class="ba">Some Game</h3>
      <div id="controls" class="measure-narrow">
        <button
          *ngFor="let btn of buttons; let index = index"
          class="br-pill ph3 pv2 mb2 dib white bg-dark-green hover-bg-green">
          Button {{index}} {{btn}}
        </button>
        <input [(ngModel)]="zoom" type="range" id="zoom-range" class="mh4" />
      </div>
      <canvas id="screen" width="{{width}}" height="{{height}}"
        class="ba"
      ></canvas>
    </div>
  `,
  styles: [
    `
    #container {
      display: grid;
      grid:
        "header header"
        "controls screen";
    }
    #title { grid-area: header; }
    #controls { grid-area: controls; }
    #screen { grid-area: screen; }
  `,
  ],
})
export class AppComponent {
  public width = 640
  public height = 480
  public buttons = ['a', 'b', 'c']
  public zoom = 10
}
