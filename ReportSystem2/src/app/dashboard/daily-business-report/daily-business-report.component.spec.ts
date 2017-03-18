import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyBusinessReportComponent } from './daily-business-report.component';

describe('DailyBusinessReportComponent', () => {
  let component: DailyBusinessReportComponent;
  let fixture: ComponentFixture<DailyBusinessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyBusinessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyBusinessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
