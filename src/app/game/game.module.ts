import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ScreenComponent } from './screen/screen.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ScreenComponent],
  exports: [ScreenComponent],
})
export class GameModule {}
