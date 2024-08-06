import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoVeinteInfoComponent } from './cuento-veinte-info.component';

describe('CuentoVeinteInfoComponent', () => {
  let component: CuentoVeinteInfoComponent;
  let fixture: ComponentFixture<CuentoVeinteInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoVeinteInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoVeinteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
