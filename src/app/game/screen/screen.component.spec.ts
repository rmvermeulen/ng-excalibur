import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ScreenComponent } from './screen.component'

describe('Screen component', () => {
  let component: ScreenComponent
  let fixture: ComponentFixture<ScreenComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ScreenComponent)
    // do not call fixture.detectChanges()
    component = fixture.componentInstance
  })

  it('should not create the engine in the constructor', () => {
    expect(component).toBeTruthy()
    expect(component).not.toHaveProperty('engine')
  })
})
