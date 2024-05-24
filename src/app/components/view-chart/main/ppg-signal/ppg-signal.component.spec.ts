import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpgSignalComponent } from './ppg-signal.component';

describe('PpgSignalComponent', () => {
  let component: PpgSignalComponent;
  let fixture: ComponentFixture<PpgSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PpgSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PpgSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
