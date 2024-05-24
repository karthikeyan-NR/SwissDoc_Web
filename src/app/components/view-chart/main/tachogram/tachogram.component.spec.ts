import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachogramComponent } from './tachogram.component';

describe('TachogramComponent', () => {
  let component: TachogramComponent;
  let fixture: ComponentFixture<TachogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TachogramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TachogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
