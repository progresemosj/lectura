import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoDiecisieteInfoComponent } from './cuento-diecisiete-info.component';

describe('CuentoDiecisieteInfoComponent', () => {
  let component: CuentoDiecisieteInfoComponent;
  let fixture: ComponentFixture<CuentoDiecisieteInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoDiecisieteInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoDiecisieteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
