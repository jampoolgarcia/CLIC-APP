import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCitesComponent } from './list-cites.component';

describe('ListCitesComponent', () => {
  let component: ListCitesComponent;
  let fixture: ComponentFixture<ListCitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
