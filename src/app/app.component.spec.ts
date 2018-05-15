import { TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MockComponent } from 'ng-mocks'

import { AppComponent } from './app.component'
import { ControlsComponent } from './game/controls/controls.component'
import { ScreenComponent } from './game/screen/screen.component'

describe('AppComponent', () => {
  let app
  let fixture
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent,
        MockComponent(ScreenComponent),
        MockComponent(ControlsComponent),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    app = fixture.debugElement.componentInstance
  })

  it('should create the app', () => {
    expect(app).toBeTruthy()
  })
})
