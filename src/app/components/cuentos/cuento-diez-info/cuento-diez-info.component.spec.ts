import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoDiezInfoComponent } from './cuento-diez-info.component';

describe('CuentoDiezInfoComponent', () => {
  let component: CuentoDiezInfoComponent;
  let fixture: ComponentFixture<CuentoDiezInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoDiezInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoDiezInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
