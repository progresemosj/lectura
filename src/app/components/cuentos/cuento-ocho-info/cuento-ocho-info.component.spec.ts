import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoOchoInfoComponent } from './cuento-ocho-info.component';

describe('CuentoOchoInfoComponent', () => {
  let component: CuentoOchoInfoComponent;
  let fixture: ComponentFixture<CuentoOchoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoOchoInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoOchoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
