import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Orden } from '../interfaces/orden';
import { ClienteService } from './cliente.service';
import { ProveedorService } from './proveedor.service';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  ordenes:Orden[];
  constructor(private clienteService:ClienteService, private proveedorService:ProveedorService) { 
    let ord1:Orden ={
      id:1,
      idCliente :3,
      nombreCliente: 'Waldo Jose',
      valor:200000,
      estado:'Terminado',
      tipo:'Venta'
    }
    let ord2:Orden ={
      id:2,
      idCliente :1,
      nombreCliente: 'Camilo Andres',
      valor:100500,
      estado:'Terminado',
      tipo:'Venta'
    }
    let ord3:Orden ={
      id:3,
      idCliente :3,
      nombreCliente: 'Waldo Jose',
      valor:23000,
      estado:'Terminado',
      tipo:'Venta'
    }
    let ord4:Orden ={
      id:4,
      idCliente :2,
      nombreCliente: 'ACRE S.A',
      valor:305000,
      estado:'En proceso',
      tipo:'Compra'
    }
  this.ordenes = [ord1,ord2,ord3,ord4];
  }
  getOrdenes(){
    return this.ordenes;
  }

  crearOrden(datos:any){
    let idAux = this.ordenes.length +1;
    let clientList = JSON.parse(localStorage.getItem('clientes')!);
    let idClientAux = clientList.length;

      let ordenAux: Orden = {
        id:idAux,
        idCliente:idClientAux,
        nombreCliente : datos.nombreClient,
        valor: datos.valor,
        estado: datos.estado,
        tipo: datos.tipo
      };

      let clientAux = this.clienteService.crearCliente(datos);
      clientList.push(clientAux);
      console.log(clientAux);
      localStorage.setItem('clientes', JSON.stringify(clientList));



      let listaOrd = JSON.parse(localStorage.getItem('ordenes')!);
      listaOrd.push(ordenAux);
      console.log(listaOrd);
      
      localStorage.setItem('ordenes',JSON.stringify(listaOrd));

      return ordenAux;
  }


  crearOrdenCompra(datos:any){
    let idAux = this.ordenes.length +1;
    let provList = JSON.parse(localStorage.getItem('ordenes')!);
    let idProvAux = provList.length;

    let ordAux: Orden = {
      id:idAux,
      idCliente:idProvAux,
      nombreCliente : datos.nombre,
      valor: datos.total,
      estado:"En proceso",
      tipo: "Compra"
    };
    
    let listOrdNew= JSON.parse(localStorage.getItem('ordenes')!);
    listOrdNew.push(ordAux);
    localStorage.setItem('ordenes',JSON.stringify(listOrdNew));

    //Creacion del proveedor

    this.proveedorService.crearProveedor(datos);
    console.log("Cotizacion y proveedor creado")
  }
}
