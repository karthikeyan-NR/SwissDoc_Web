import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoincareComponent } from './poincare.component';

describe('PoincareComponent', () => {
  let component: PoincareComponent;
  let fixture: ComponentFixture<PoincareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoincareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
