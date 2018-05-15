import { Component, OnDestroy, OnInit } from '@angular/core'
import { Color, Engine } from 'excalibur'
import { fromEvent } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'

import { Player } from '../player'

@Component({
  selector: 'app-screen',
  template: `
    <canvas id="screen" class="ba"></canvas>
  `,
  styles: [],
})
export class ScreenComponent implements OnInit, OnDestroy {
  public width = 640
  public height = 480
  private engine: Engine
  // constructor() {}

  public ngOnInit() {
    this.engine = new Engine({
      canvasElementId: 'screen',
      backgroundColor: Color.LightGray,
      // displayMode: DisplayMode.Container,
      width: this.width,
      height: this.height,
    })

    return this.engine.start().then(() => {
      const player = new Player(100, 100, 50, 50, Color.Red)

      this.engine.add(player)

      fromEvent(this.engine, 'preupdate')
        .pipe(
          map(() => this.engine.currentScene.actors.length),
          distinctUntilChanged(),
        )
        .subscribe(actors => console.log('actors:', actors))
    })
  }

  public ngOnDestroy() {
    if (this.engine) {
      this.engine.stop()
      this.engine = null
    }
  }
}
