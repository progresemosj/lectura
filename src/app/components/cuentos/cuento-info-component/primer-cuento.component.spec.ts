import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerCuentoComponent } from './primer-cuento.component';

describe('PrimerCuentoComponent', () => {
  let component: PrimerCuentoComponent;
  let fixture: ComponentFixture<PrimerCuentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerCuentoComponent]
    });
    fixture = TestBed.createComponent(PrimerCuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
