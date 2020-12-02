import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Producto[]; 
  constructor() { 
    let prod1: Producto ={
      id:1,
      nombre:'computador',
      marca:'Asus',
      modelo: '5xls000',
      ubicacion:'Bodega',
      precio:300,
      stock:40
    };

    let prod2: Producto ={
      id:2,
      nombre:'Taladro',
      marca:'Black and Decker',
      modelo: 'x330',
      ubicacion:'Vitrina',
      precio:50,
      stock:12
    };

    let prod3: Producto ={
      id:3,
      nombre:'Tablet',
      marca:'Huawei',
      modelo: 'tab123',
      ubicacion:'Bodega',
      precio:100,
      stock:10
    };
    
    this.productos = [prod1,prod2,prod3];
  }
  getProductos(){
    return this.productos;  
  }
  getListaId(){
    let lista:any = [];
    this.productos.forEach(item=>{
      lista.push(item.id);
    });
    return lista;
  }

  modificarProducto(listData:any){
    this.productos.map(item => {
      
      if (item.id == listData[0]) {
         item.nombre = listData[1]; 
         item.marca = listData[2] ;
         item.modelo = listData[3];
         item.ubicacion = listData[4];
         item.precio = listData[5];
        }else{
          console.log("No es el producto");
        }
    });
    console.log(this.productos);    
  }
  
}
