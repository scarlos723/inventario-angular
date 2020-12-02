import { Component, OnInit } from '@angular/core';
import { CotizacionService } from '../services/cotizacion.service';
import { OrdenService } from '../services/orden.service';

@Component({
  selector: 'app-proveedores-compras',
  templateUrl: './proveedores-compras.component.html',
  styleUrls: ['./proveedores-compras.component.css']
})
export class ProveedoresComprasComponent implements OnInit {
  listaProd:any = [];
  total:number = 0;
  constructor(private ordenService: OrdenService, private cotizacionService:CotizacionService) { }

  ngOnInit(): void {
  }

  enlistarProducto() {
               
    let producto = { 
      "nombre": (document.querySelector('#inp_nombre') as HTMLInputElement).value,
      "marca": (document.querySelector('#inp_marca') as HTMLInputElement).value,
      "modelo": (document.querySelector('#inp_modelo') as HTMLInputElement).value,
      "precio": (document.querySelector('#inp_precio') as HTMLInputElement).value,
      "cantidad": (document.querySelector('#inp_cantidad') as HTMLInputElement).value
    }
    
    this.listaProd.push(producto);
    let suma= 0;
    this.listaProd.forEach((item:any) => {
      
      suma= suma + (parseInt(item.precio) * parseInt(item.cantidad));
    });
    console.log(suma);
    this.total=suma;
  }

  crearCotizacion(){
    let datosProv = {
      "nombre": (document.querySelector('#nombre_prov') as HTMLInputElement).value,
      "identificacion": (document.querySelector('#identificacion_prov') as HTMLInputElement).value,
      "telefono": (document.querySelector('#telelefono_prov') as HTMLInputElement).value,
      "total": this.total
    }
    console.log(datosProv);
    this.cotizacionService.crearCotizacionCompra(datosProv);
    window.alert("Cotizacion creada")
  }

  crearOrden(){
    let datosProv = {
      "nombre": (document.querySelector('#nombre_prov') as HTMLInputElement).value,
      "identificacion": (document.querySelector('#identificacion_prov') as HTMLInputElement).value,
      "telefono": (document.querySelector('#telelefono_prov') as HTMLInputElement).value,
      "total": this.total
    }
    this.ordenService.crearOrdenCompra(datosProv);
    window.alert("Oden creada")
  }
}
