import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDataViewComponent } from './recent-data-view.component';

describe('RecentDataViewComponent', () => {
  let component: RecentDataViewComponent;
  let fixture: ComponentFixture<RecentDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentDataViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
