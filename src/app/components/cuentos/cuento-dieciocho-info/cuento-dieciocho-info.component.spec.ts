import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoDieciochoInfoComponent } from './cuento-dieciocho-info.component';

describe('CuentoDieciochoInfoComponent', () => {
  let component: CuentoDieciochoInfoComponent;
  let fixture: ComponentFixture<CuentoDieciochoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoDieciochoInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoDieciochoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
