import { Component, OnInit } from '@angular/core';

import { Producto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
var bandera:boolean =true;
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})


export class ListaProductosComponent implements OnInit {
  productos:Producto[];
  query:string =''; //variable query para poder realizar la busqueda 
  

  
  constructor(private productoService: ProductoService ) {
    
    if (bandera==true){
      console.log("Entra al if");
      localStorage.setItem('productos',JSON.stringify( productoService.getProductos()));
    }else{
      console.log("Entra al Else");
    }
    
    bandera=false;
    this.productos = JSON.parse(localStorage.getItem('productos')!) // con "!" se le dice a typescript que es seguro de que no sea nullo
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

    let localProducts  = JSON.parse(localStorage.getItem('productos')!);
    localProducts.map((item:any) => { //modificar
       if (item.id == id){
        item.nombre = listaDatos[1];
        item.marca = listaDatos[2];
        item.modelo = listaDatos[3];
        item.ubicacion = listaDatos[4];
        item.precio = listaDatos[5];
       }
    });

    localStorage.setItem('productos', JSON.stringify(localProducts)); //modifico con los nuevos productos
    this.productos = JSON.parse(localStorage.getItem('productos')!);

    document.querySelectorAll('#fila_'+id).forEach(element =>{ //oculta los campos de input
      element.setAttribute('style','display: none;');
    } );
    document.querySelectorAll('#fila_aux_'+id).forEach(element =>{// Muestra los otros datos sin el input
      element.setAttribute('style','display: block;');
    } );

    document.querySelector('#btn_red_'+id)?.setAttribute('style','display:inline;'); //Se muestra el boto eliminar
    document.querySelector('#btn_green_'+id)?.setAttribute('style','display:none;'); // se oculta el boton aplicar
    


    //proceso para modificar los archivos
  
    // document.querySelectorAll('#fila_'+id).forEach(element =>{ //se obtiene los valores de los imnput en una lista
    // listaDatos.push( (element as HTMLInputElement).value ); 
    // } );
    
    // this.productoService.modificarProducto(listaDatos);// modifica el producto
    // this.productos =  this.productoService.getProductos(); //vuelve a traer los productos

    // document.querySelectorAll('#fila_'+id).forEach(element =>{ //oculta los campos de input
    //   element.setAttribute('style','display: none;');
    // } );
    // document.querySelectorAll('#fila_aux_'+id).forEach(element =>{// Muestra los otros datos sin el input
    //   element.setAttribute('style','display: block;');
    // } );

    // document.querySelector('#btn_red_'+id)?.setAttribute('style','display:inline;'); //Se muestra el boto eliminar
    // document.querySelector('#btn_green_'+id)?.setAttribute('style','display:none;'); // se oculta el boton aplicar

    console.log("Producto actualizado");
    window.alert("Producto actualizado");
  }


  eliminarProducto(id:any){
    let listaProds = JSON.parse(localStorage.getItem('productos')!);
    console.log(id-1);
    console.log( listaProds);

    listaProds.splice(id-1,1);

    console.log(listaProds);

    localStorage.setItem('productos',JSON.stringify(listaProds))

    this.productos = JSON.parse(localStorage.getItem('productos')!);

    console.log("producto eliminado");
    window.alert("Producto eliminado");
  }


  
  }


