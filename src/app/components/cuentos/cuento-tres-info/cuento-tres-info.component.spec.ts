import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoTresInfoComponent } from './cuento-tres-info.component';

describe('CuentoTresInfoComponent', () => {
  let component: CuentoTresInfoComponent;
  let fixture: ComponentFixture<CuentoTresInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoTresInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoTresInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
