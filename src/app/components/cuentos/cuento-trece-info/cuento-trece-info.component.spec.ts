import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoTreceInfoComponent } from './cuento-trece-info.component';

describe('CuentoTreceInfoComponent', () => {
  let component: CuentoTreceInfoComponent;
  let fixture: ComponentFixture<CuentoTreceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoTreceInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoTreceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
