import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCatalogsComponent } from './selected-catalogs.component';

describe('SelectedCatalogsComponent', () => {
  let component: SelectedCatalogsComponent;
  let fixture: ComponentFixture<SelectedCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCatalogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
