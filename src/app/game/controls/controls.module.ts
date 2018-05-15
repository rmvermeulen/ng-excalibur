import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ControlsComponent } from './controls.component'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ControlsComponent],
  exports: [ControlsComponent],
})
export class ControlsModule {}
