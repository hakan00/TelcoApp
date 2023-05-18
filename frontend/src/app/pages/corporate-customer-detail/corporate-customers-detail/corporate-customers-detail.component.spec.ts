import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateCustomersDetailComponent } from './corporate-customers-detail.component';

describe('CorporateCustomersDetailComponent', () => {
  let component: CorporateCustomersDetailComponent;
  let fixture: ComponentFixture<CorporateCustomersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateCustomersDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateCustomersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
