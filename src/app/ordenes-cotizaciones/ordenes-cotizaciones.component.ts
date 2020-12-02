import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

import { Producto } from '../interfaces/producto';
import { CotizacionService } from '../services/cotizacion.service';
import { OrdenService } from '../services/orden.service';

@Component({
  selector: 'app-ordenes-cotizaciones',
  templateUrl: './ordenes-cotizaciones.component.html',
  styleUrls: ['./ordenes-cotizaciones.component.css']
})
export class OrdenesCotizacionesComponent implements OnInit {

  productos: Producto[];
  carrito: any[];
  precios: number[]=[];
  total: number=0;

  query:string='';
  
  constructor(private ordenService:OrdenService, private cotiazacionService:CotizacionService) {
    

    this.productos = JSON.parse(localStorage.getItem('productos')!);
    this.carrito = [];

    
  }

  ngOnInit(): void {
  }
  agregarAlCarrito(id:any):void{
    //this.carrito.push(this.cotizaciones.find(item => item.id == id));
    console.log("el id es: "+id);

    let produ:any = this.productos.find(item=> item.id ==id );
    this.carrito.push(produ);

    //console.log(this.carrito);

    this.precios.push(produ.precio);

    
    setTimeout(this.calcularTotal, 500);
  }

  calcularTotal(){

      let sum:number=0;
      let i=0;
      document.querySelectorAll('#precio').forEach(element =>{
        let cantidad = (element as  HTMLInputElement).value;
        sum = sum + (parseInt(cantidad) *this.precios[i]);
        i=i+1;
      });
      this.total = sum;
      console.log(this.total);
  }

  

  generarCotizacion(){
    let datos = {
      "nombreClient":(document.querySelector('#nombre_cliente') as HTMLInputElement).value ,
      "apellidoClient":(document.querySelector('#apellido_cliente') as HTMLInputElement).value ,
      "telefono":(document.querySelector('#telefono_cliente') as HTMLInputElement).value,
      "cedula":(document.querySelector('#identificacion_cliente') as HTMLInputElement).value,
      "valor": this.total ,
      "tipo": "Venta",
    }
    let cotizacion = this.cotiazacionService.crearCotizacion(datos);
    console.log("Se creo la cotizacion");
    window.alert("cotizacion creada")
  }
  generarOrden(){
  let datos = {
    "nombreClient":(document.querySelector('#nombre_cliente') as HTMLInputElement).value ,
    "apellidoClient":(document.querySelector('#apellido_cliente') as HTMLInputElement).value ,
    "telefono":(document.querySelector('#telefono_cliente') as HTMLInputElement).value,
    "cedula":(document.querySelector('#identificacion_cliente') as HTMLInputElement).value,
    "valor": this.total ,
    "tipo": "Venta",
    "estado":"En proceso"
  }
  
  let orden = this.ordenService.crearOrden(datos);
  console.log("Se creo la Orden");
  window.alert("Oden creada")
 }
}
