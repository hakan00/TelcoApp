import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateCustomersComponent } from './corporate-customers.component';

describe('CorporateCustomersComponent', () => {
  let component: CorporateCustomersComponent;
  let fixture: ComponentFixture<CorporateCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
