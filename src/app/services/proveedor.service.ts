import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  proveedores: Proveedor[];
  constructor() {
    let prov1:Proveedor={
      id:1,
      nombre:'proveedor S.A.',
      telefono:55515446,
      nit:41231312
    }
    let prov2:Proveedor={
      id:2,
      nombre:'ACRE S.A.',
      telefono:55585854,
      nit:14171515
    }
    this.proveedores = [prov1,prov2];
   }
   getProveedores(){
     return this.proveedores;
   }

   crearProveedor(datos:any){
    let provAux:Proveedor = {
      id: this.proveedores.length +1,
      nombre: datos.nombre,
      telefono: parseInt(datos.telefono),
      nit: parseInt(datos.identificacion)
    }
    console.log(provAux); 
    let listProvNew = JSON.parse(localStorage.getItem('proveedores')!);
    listProvNew.push(provAux);
    console.log(listProvNew);
    localStorage.setItem('proveedores', JSON.stringify(listProvNew) );

   }
}
