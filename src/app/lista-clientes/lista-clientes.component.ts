import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';
var bandera =true;
@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[];
  query:string='';
  constructor( private clienteService:ClienteService) {
    
    if (bandera == true){
    localStorage.setItem('clientes',JSON.stringify(clienteService.getCliente()));
    }
    bandera=false;
    
    this.clientes = JSON.parse( localStorage.getItem('clientes')!); //"!" se asegura de que el elemento no retorna nulo
    console.log(this.clientes)
    
   }

  ngOnInit(): void {
  }

}
