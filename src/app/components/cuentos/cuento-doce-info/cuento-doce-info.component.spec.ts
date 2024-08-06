import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoDoceInfoComponent } from './cuento-doce-info.component';

describe('CuentoDoceInfoComponent', () => {
  let component: CuentoDoceInfoComponent;
  let fixture: ComponentFixture<CuentoDoceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoDoceInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoDoceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
