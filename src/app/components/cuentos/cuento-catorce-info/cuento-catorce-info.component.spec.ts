import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoCatorceInfoComponent } from './cuento-catorce-info.component';

describe('CuentoCatorceInfoComponent', () => {
  let component: CuentoCatorceInfoComponent;
  let fixture: ComponentFixture<CuentoCatorceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoCatorceInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoCatorceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
