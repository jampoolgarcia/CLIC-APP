import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepikerComponent } from './timepiker.component';

describe('TimepikerComponent', () => {
  let component: TimepikerComponent;
  let fixture: ComponentFixture<TimepikerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepikerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
