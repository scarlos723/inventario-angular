import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresComprasComponent } from './proveedores-compras.component';

describe('ProveedoresComprasComponent', () => {
  let component: ProveedoresComprasComponent;
  let fixture: ComponentFixture<ProveedoresComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
