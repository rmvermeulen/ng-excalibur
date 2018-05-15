import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div id="container">
      <h3 id="title" class="ba">Some Game</h3>
      <app-controls></app-controls>
      <app-screen></app-screen>
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
  public buttons = ['a', 'b', 'c']
  public zoom = 10
}
