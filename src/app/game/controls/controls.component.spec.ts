import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'

import { ControlsComponent } from './controls.component'

describe('ControlsComponent', () => {
  let component: ControlsComponent
  let fixture: ComponentFixture<ControlsComponent>

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ControlsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ControlsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have 4 buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'))
    expect(buttons).toHaveLength(4)
  })
})
