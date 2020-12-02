import { Component, OnInit } from '@angular/core';
import { Cotizacion } from '../interfaces/cotizacion';
import { CotizacionService } from '../services/cotizacion.service';

var bandera:boolean = true;
@Component({
  selector: 'app-lista-cotizaciones',
  templateUrl: './lista-cotizaciones.component.html',
  styleUrls: ['./lista-cotizaciones.component.css']
})
export class ListaCotizacionesComponent implements OnInit {
  cotizaciones:Cotizacion[];
  //carrito:any[];
 
  query:string='';

  constructor(private cotizacionService:CotizacionService) {
    if(bandera== true){
      localStorage.setItem('cotizaciones', JSON.stringify( cotizacionService.getCotizaciones() ));
      console.log('Entro al if')
    }
    bandera=false;

    this.cotizaciones = JSON.parse( localStorage.getItem('cotizaciones')! ); //con "!" se le asegura que el parametro no es null
  
    
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

    let localProducts  = JSON.parse(localStorage.getItem('cotizaciones')!);
    localProducts.map((item:any) => { //modificar
       if (item.id == id){
        item.tipo = listaDatos[1];
        item.nombreCliente = listaDatos[2];
        item.valor = listaDatos[3];
        item.estado = listaDatos[4];
       }
    });

    localStorage.setItem('cotizaciones', JSON.stringify(localProducts)); //modifico con los nuevos productos
    this.cotizaciones = JSON.parse(localStorage.getItem('cotizaciones')!);

    document.querySelectorAll('#fila_'+id).forEach(element =>{ //oculta los campos de input
      element.setAttribute('style','display: none;');
    } );
    document.querySelectorAll('#fila_aux_'+id).forEach(element =>{// Muestra los otros datos sin el input
      element.setAttribute('style','display: block;');
    } );

    document.querySelector('#btn_red_'+id)?.setAttribute('style','display:inline;'); //Se muestra el boto eliminar
    document.querySelector('#btn_green_'+id)?.setAttribute('style','display:none;'); // se oculta el boton aplicar
  

    console.log("Cotizacion actualizado");
    window.alert("Cotizacion actualizada");

  }

  eliminarItem(id:any){
    let listaProds = JSON.parse(localStorage.getItem('cotizaciones')!);
    

    listaProds.splice(id-1,1);

    console.log(listaProds);

    localStorage.setItem('cotizaciones',JSON.stringify(listaProds))

    this.cotizaciones = JSON.parse(localStorage.getItem('cotizaciones')!);

    console.log("Cotizacion eliminada");

    window.alert("Cotizacion eliminada");
  }

  

}
