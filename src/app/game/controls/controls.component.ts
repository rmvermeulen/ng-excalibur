import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-controls',
  template: `
    <div id="controls" class="measure-narrow">
      <button *ngFor="let button of buttons; let index = index"
        class="br-pill w4 center ph3 pv2 db white bg-dark-green hover-bg-green">
        {{button}}
      </button>
      <input [(ngModel)]="zoom" type="range" id="zoom-range" class="mh4" />
    </div>
  `,
  styles: [],
})
export class ControlsComponent implements OnInit {
  public zoom: 10
  public buttons = ['create', 'delete', 'start', 'stop']
  public ngOnInit() {
    // TODO
  }
}
