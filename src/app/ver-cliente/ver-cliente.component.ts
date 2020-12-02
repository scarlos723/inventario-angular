import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../interfaces/cliente';
import { Orden } from '../interfaces/orden';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {

  ordenes:Orden[]=[]; 
  clientID:any;
  cliente: any; //se debe especificar any por que si no arroja error con "Cliente"
  
  constructor(private activatedRoute: ActivatedRoute, private clienteService:ClienteService) {
    
    
    this.clientID = this.activatedRoute.snapshot.params.id; // saca el id del url
    //this.cliente = this.clienteService.getClienteById(this.clientID); // busca el id cliente en el servicio

    let listClients= JSON.parse(localStorage.getItem('clientes')!);
    console.log(listClients)  

    listClients.forEach((item:any) => {
      if(item.id == this.clientID){
        this.cliente = item;
      }
    });

    //saco las ordenes que corresponden al cliente
    let listOrdenes=JSON.parse(localStorage.getItem('ordenes')!);
   
    listOrdenes.forEach((item:any) => {
      if(item.idCliente == this.clientID ){
        this.ordenes.push(item)
      }
    });
    console.log(this.ordenes)
    

   }

  ngOnInit(): void {
    
  }

  actualizarItem(id:any){

    //proceso para modificar el local storage
    let datos:any ={
      nombre: (document.querySelector("#nombre_client") as HTMLInputElement).value,
      apellido: (document.querySelector("#apellido_client") as HTMLInputElement).value,
      identificacion: (document.querySelector("#identificacion_client") as HTMLInputElement).value,
      telefono: (document.querySelector("#telefono_client") as HTMLInputElement).value

    }

    let localItems  = JSON.parse(localStorage.getItem('clientes')!);
    localItems.map((item:any) => { //mapeo los items de la lista para poder modificarlos
       if (item.id == id){ //selecciono el que le corresponda el id de usuario 
        item.nombres = datos.nombre;
        item.apellidos = datos.apellido;
        item.cedula = datos.identificacion;
        item.telefono = datos.telefono;
       }
    });

    localStorage.setItem('clientes', JSON.stringify(localItems)); //modifico con los nuevos productos
   
    window.alert("Cliente actualizado");

    
    

  }

}
