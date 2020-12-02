import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  cardVentas = {
    "ventasTotales": 0,
    "clientes": 0,
    "productos": 0
  }
  cardCompras = {
    "comprasTotales": 0,
    "proveedores": 0,
    "productos": 0
  }

  cardOrdenes = {
    "ordenesTotales": 0,
    "terminadas": 0,
    "enProceso": 0
  }

  cardInventario = {
    "inventarioTotal": 0,
    "bodega": 0,
    "vitrina": 0
  }



  constructor() {

    //Calcular datos card de ventas y compras
    let sumVentas = 0;
    let sumCompras= 0 
    JSON.parse(localStorage.getItem('ordenes')!).forEach((item: any) => {
      if (item.tipo == "Venta") {
        sumVentas = sumVentas + item.valor;
      }
      if(item.tipo == "Compra"){
        sumCompras = sumCompras + item.valor;
      }
    });

    this.cardVentas = {
      "ventasTotales": sumVentas  ,
      "clientes": JSON.parse(localStorage.getItem('ordenes')!).length,
      "productos": 23
    };

    this.cardCompras = {
      "comprasTotales": sumCompras,
      "proveedores": JSON.parse(localStorage.getItem('proveedores')!).length,
      "productos": 120
    }

    
    this.cardOrdenes = {
      "ordenesTotales": JSON.parse(localStorage.getItem('ordenes')!).length,
      "terminadas":  JSON.parse(localStorage.getItem('ordenes')!).filter((item:any) => item.estado=='Terminado').length,
      "enProceso": JSON.parse(localStorage.getItem('ordenes')!).filter((item:any) => item.estado=='En proceso').length
    }
  
    this.cardInventario = {
      "inventarioTotal": JSON.parse(localStorage.getItem('productos')!).length,
      "bodega": JSON.parse(localStorage.getItem('productos')!).filter((item:any) => item.ubicacion=='Bodega').length,
      "vitrina": JSON.parse(localStorage.getItem('productos')!).filter((item:any) => item.ubicacion=='Vitrina').length
    }


  }

  ngOnInit(): void {
  }

  actualizarVentas(){
    this.cardVentas.productos = this.cardVentas.productos + 1;
  }

  actualizarCompras(){
    this.cardCompras.productos = this.cardCompras.productos + 1;
  }

}
