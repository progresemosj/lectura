import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoNueveInfoComponent } from './cuento-nueve-info.component';

describe('CuentoNueveInfoComponent', () => {
  let component: CuentoNueveInfoComponent;
  let fixture: ComponentFixture<CuentoNueveInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoNueveInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoNueveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
