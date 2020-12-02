import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesCotizacionesComponent } from './ordenes-cotizaciones.component';

describe('OrdenesCotizacionesComponent', () => {
  let component: OrdenesCotizacionesComponent;
  let fixture: ComponentFixture<OrdenesCotizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesCotizacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
