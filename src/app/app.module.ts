import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ControlsModule } from './controls/controls.module'
import { GameModule } from './game/game.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GameModule, ControlsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
