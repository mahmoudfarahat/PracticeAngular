import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToInvalidInputComponent } from './scroll-to-invalid-input.component';

describe('ScrollToInvalidInputComponent', () => {
  let component: ScrollToInvalidInputComponent;
  let fixture: ComponentFixture<ScrollToInvalidInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollToInvalidInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToInvalidInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
