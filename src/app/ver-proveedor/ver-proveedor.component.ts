import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ver-proveedor',
  templateUrl: './ver-proveedor.component.html',
  styleUrls: ['./ver-proveedor.component.css']
})
export class VerProveedorComponent implements OnInit {
  idUrl: any;
  proveedor:any; //se debe especificar any por que si es tipo proveedor arroja error de inicializacion
  constructor(private activatedRoute: ActivatedRoute) {

    this.idUrl = this.activatedRoute.snapshot.params.id; // saca el id del url
    let listProvs = JSON.parse( localStorage.getItem('proveedores')! );
    listProvs.forEach((item:any)=>{
      if(item.id = this.idUrl){
        this.proveedor = item;
      }
    });
  }

  ngOnInit(): void {
  }


}