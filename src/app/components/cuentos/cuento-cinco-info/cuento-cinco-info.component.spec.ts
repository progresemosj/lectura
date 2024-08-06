import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoCincoInfoComponent } from './cuento-cinco-info.component';

describe('CuentoCincoInfoComponent', () => {
  let component: CuentoCincoInfoComponent;
  let fixture: ComponentFixture<CuentoCincoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoCincoInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoCincoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
