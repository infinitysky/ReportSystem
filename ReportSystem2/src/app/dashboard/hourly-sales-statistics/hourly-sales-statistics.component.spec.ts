import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlySalesStatisticsComponent } from './hourly-sales-statistics.component';

describe('HourlySalesStatisticsComponent', () => {
  let component: HourlySalesStatisticsComponent;
  let fixture: ComponentFixture<HourlySalesStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlySalesStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlySalesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
