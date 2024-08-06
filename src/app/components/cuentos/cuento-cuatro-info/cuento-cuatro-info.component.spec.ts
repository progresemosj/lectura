import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoCuatroInfoComponent } from './cuento-cuatro-info.component';

describe('CuentoCuatroInfoComponent', () => {
  let component: CuentoCuatroInfoComponent;
  let fixture: ComponentFixture<CuentoCuatroInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoCuatroInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoCuatroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
