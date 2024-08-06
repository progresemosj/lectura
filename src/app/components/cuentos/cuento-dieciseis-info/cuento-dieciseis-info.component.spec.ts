import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoDieciseisInfoComponent } from './cuento-dieciseis-info.component';

describe('CuentoDieciseisInfoComponent', () => {
  let component: CuentoDieciseisInfoComponent;
  let fixture: ComponentFixture<CuentoDieciseisInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoDieciseisInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoDieciseisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
