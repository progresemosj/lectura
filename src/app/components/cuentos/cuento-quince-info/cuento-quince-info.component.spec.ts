import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoQuinceInfoComponent } from './cuento-quince-info.component';

describe('CuentoQuinceInfoComponent', () => {
  let component: CuentoQuinceInfoComponent;
  let fixture: ComponentFixture<CuentoQuinceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoQuinceInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoQuinceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
