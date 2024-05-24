import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToggleButtonComponent } from './custom-toggle-button.component';

describe('ButtonComponent', () => {
  let component: CustomToggleButtonComponent;
  let fixture: ComponentFixture<CustomToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomToggleButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
