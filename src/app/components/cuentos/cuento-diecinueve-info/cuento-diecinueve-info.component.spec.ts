import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoDiecinueveInfoComponent } from './cuento-diecinueve-info.component';

describe('CuentoDiecinueveInfoComponent', () => {
  let component: CuentoDiecinueveInfoComponent;
  let fixture: ComponentFixture<CuentoDiecinueveInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentoDiecinueveInfoComponent]
    });
    fixture = TestBed.createComponent(CuentoDiecinueveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
