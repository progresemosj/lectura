import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoSieteInfoComponent } from './cuento-siete-info.component';

describe('CuentoSieteInfoComponent', () => {
  let component: CuentoSieteInfoComponent;
  let fixture: ComponentFixture<CuentoSieteInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoSieteInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoSieteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
