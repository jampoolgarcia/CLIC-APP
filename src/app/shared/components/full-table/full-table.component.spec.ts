import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTableComponent } from './full-table.component';

describe('FullTableComponent', () => {
  let component: FullTableComponent;
  let fixture: ComponentFixture<FullTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
