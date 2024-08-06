import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoSeisInfoComponent } from './cuento-seis-info.component';

describe('CuentoSeisInfoComponent', () => {
  let component: CuentoSeisInfoComponent;
  let fixture: ComponentFixture<CuentoSeisInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoSeisInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoSeisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
