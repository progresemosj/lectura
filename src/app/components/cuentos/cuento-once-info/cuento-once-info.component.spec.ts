import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoOnceInfoComponent } from './cuento-once-info.component';

describe('CuentoOnceInfoComponent', () => {
  let component: CuentoOnceInfoComponent;
  let fixture: ComponentFixture<CuentoOnceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoOnceInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoOnceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
