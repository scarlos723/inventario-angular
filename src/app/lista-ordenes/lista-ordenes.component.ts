import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Orden } from '../interfaces/orden';
import { OrdenService } from '../services/orden.service';
var bandera:boolean=true;
@Component({
  selector: 'app-lista-ordenes',
  templateUrl: './lista-ordenes.component.html',
  styleUrls: ['./lista-ordenes.component.css']
})
export class ListaOrdenesComponent implements OnInit {
  ordenes: Orden[];
  query:string='';
  constructor(private ordenService : OrdenService) {
    if(bandera==true){
      localStorage.setItem('ordenes', JSON.stringify(ordenService.getOrdenes()!));
    }
    bandera=false;
    this.ordenes = JSON.parse( localStorage.getItem('ordenes')! );
   }

  ngOnInit(): void {
  }

  modificarAction(id:any):void{
    
    document.querySelectorAll('#fila_'+id).forEach(element =>{ //Muestra los campos para ingresar datos (input)
      element.setAttribute('style','display: block;');
    } );
    document.querySelectorAll('#fila_aux_'+id).forEach(element =>{// Oculta los otros datos para solo dejar ver el input
      element.setAttribute('style','display: none;');
    } );
    document.querySelector('#btn_red_'+id)?.setAttribute('style','display:none;'); //Se oculta el boto eliminar
    document.querySelector('#btn_green_'+id)?.setAttribute('style','display:inline;'); // se muestra el boton aplicar

    
    
  }

  aplicarCambio(id:any){

    //proceso para modificar el local storage
    let listaDatos:any =[];

    document.querySelectorAll('#fila_'+id).forEach(element =>{ //se obtiene los valores de los imnput en una lista
      listaDatos.push( (element as HTMLInputElement).value ); 
      } );

    let localProducts  = JSON.parse(localStorage.getItem('ordenes')!);
    localProducts.map((item:any) => { //modificar
       if (item.id == id){
        item.tipo = listaDatos[1];
        item.nombreCliente = listaDatos[2];
        item.valor = listaDatos[3];
        item.estado = listaDatos[4];
       }
    });

    localStorage.setItem('ordenes', JSON.stringify(localProducts)); //modifico con los nuevos productos
    this.ordenes = JSON.parse(localStorage.getItem('ordenes')!);

    document.querySelectorAll('#fila_'+id).forEach(element =>{ //oculta los campos de input
      element.setAttribute('style','display: none;');
    } );
    document.querySelectorAll('#fila_aux_'+id).forEach(element =>{// Muestra los otros datos sin el input
      element.setAttribute('style','display: block;');
    } );

    document.querySelector('#btn_red_'+id)?.setAttribute('style','display:inline;'); //Se muestra el boto eliminar
    document.querySelector('#btn_green_'+id)?.setAttribute('style','display:none;'); // se oculta el boton aplicar
  

    console.log("Orden actualizado");
    window.alert("Orden actualizada");

  }

  eliminarItem(id:any){
    let listaProds = JSON.parse(localStorage.getItem('ordenes')!);
    

    listaProds.splice(id-1,1);

    console.log(listaProds);

    localStorage.setItem('ordenes',JSON.stringify(listaProds))

    this.ordenes = JSON.parse(localStorage.getItem('ordenes')!);

    console.log("Orden eliminada");

    window.alert("Orden eliminada");
  }

}
