import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Cotizacion } from '../interfaces/cotizacion';
import { ClienteService } from './cliente.service';
import { ProveedorService } from './proveedor.service';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  cotizaciones: Cotizacion[];
  constructor(private clienteService:ClienteService, private proveedorService:ProveedorService) { 
    let cot1: Cotizacion = {
    id:1,
    idCliente:3,
    nombreCliente:'Waldo Jose' , 
    valor:150000,
    tipo:'Venta'
    };

    let cot2: Cotizacion = {
      id:2,
      idCliente:1,
      nombreCliente : 'Camilo Andres',
      valor:150000,
      tipo:'Venta'
    };

    let cot3: Cotizacion = {
    id:3,
    idCliente:3,
    nombreCliente:'Waldo Jose' , 
    valor:150000,
    tipo:'Venta'
    };

    this.cotizaciones = [cot1,cot2,cot3];

  }
  getCotizaciones(){
    return this.cotizaciones;
  }
  addCotizacion(cotizacion:any):void{
    this.cotizaciones.push(cotizacion);
  }
  crearCotizacion(datos:any){
      let idAux = this.cotizaciones.length +1;
      let clientList = JSON.parse(localStorage.getItem('clientes')!);
      let idClientAux = clientList.length;

      let cotAux: Cotizacion = {
        id:idAux,
        idCliente:idClientAux,
        nombreCliente : datos.nombreClient,
        valor: datos.valor,
        tipo: datos.tipo
      };

      let clientAux = this.clienteService.crearCliente(datos);
      clientList.push(clientAux);
      
      localStorage.setItem('clientes', JSON.stringify(clientList));



      let listaCots = JSON.parse(localStorage.getItem('cotizaciones')!);
      listaCots.push(cotAux);
      
      localStorage.setItem('cotizaciones',JSON.stringify(listaCots));

      return cotAux;
  }

  crearCotizacionCompra(datos:any){
    let idAux = this.cotizaciones.length +1;
    let provList = JSON.parse(localStorage.getItem('proveedores')!);
    let idProvAux = provList.length;

    let cotAux: Cotizacion = {
      id:idAux,
      idCliente:idProvAux,
      nombreCliente : datos.nombre,
      valor: datos.total,
      tipo: "Compra"
    };
  
    let listCotsNew = JSON.parse(localStorage.getItem('cotizaciones')!);
    listCotsNew.push(cotAux);
    localStorage.setItem('cotizaciones',JSON.stringify(listCotsNew));

    //Creacion del proveedor

    this.proveedorService.crearProveedor(datos);
    console.log("Cotizacion y proveedor creado")

    
  }
 
}
