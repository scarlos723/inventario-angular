import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Cliente[];
  
  constructor() { 
    let client1 : Cliente = {
      id : 1,
      cedula : 1061481512,
      nombres : 'Camilo Andres',
      apellidos :'Salgado Hernandez',
      telefono : 3135554444
    };

    let client2 : Cliente = {
      id : 2,
      cedula : 10415381512,
      nombres : 'Maria Antonia',
      apellidos :'Perez Prieto',
      telefono : 3135577744
    };

    let client3 : Cliente = {
      id : 3,
      cedula : 1061482512,
      nombres : 'Waldo Jose',
      apellidos :'Malavida Galindez',
      telefono : 3135444111
    };

    let client4 : Cliente = {
      id : 4,
      cedula : 10611475512,
      nombres : 'Pedro',
      apellidos :'Rengifo Hernandez',
      telefono : 3137754444
    };

    this.clientes = [client1,client2,client3,client4];
  }
  // metodos que se pueden llamar desde los components

  getCliente(){
    return this.clientes
  }
  getClienteById(id:any){ //por algun motivo me toca especificar el id de tipo any
    return this.clientes.find(item => item.id == id);  //verifica cada item en clientes y comprueva el id
  }

  crearCliente(datos:any){
    let idAux = this.clientes.length +1;
    let clienAux:Cliente={
      id : idAux,
      cedula : datos.cedula,
      nombres : datos.nombreClient,
      apellidos : datos.apellidoClient,
      telefono : datos.telefono
    }
    
    return clienAux;
  }
  
}
