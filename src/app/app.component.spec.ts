import { TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let app
  let fixture
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    app = fixture.debugElement.componentInstance
  })

  it('should create the app', () => {
    expect(app).toBeTruthy()
  })
})
