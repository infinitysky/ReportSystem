import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodBusinessReportComponent } from './period-business-report.component';

describe('PeriodBusinessReportComponent', () => {
  let component: PeriodBusinessReportComponent;
  let fixture: ComponentFixture<PeriodBusinessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodBusinessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodBusinessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
