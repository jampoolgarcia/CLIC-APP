import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCitesComponent } from './form-cites.component';

describe('FormCitesComponent', () => {
  let component: FormCitesComponent;
  let fixture: ComponentFixture<FormCitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
