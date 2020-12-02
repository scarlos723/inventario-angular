import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';
import { ProveedorService } from '../services/proveedor.service';
var bandera:boolean = true;
@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {
  proveedores:Proveedor[];
  query:string='';
  constructor(private proveedorService:ProveedorService) { 

    if (bandera ==true){
      let listProv = proveedorService.getProveedores();
      localStorage.setItem('proveedores', JSON.stringify(listProv));
    }
    bandera =false;
    this.proveedores = JSON.parse(localStorage.getItem('proveedores')!);
    
  }

  ngOnInit(): void {
  }

}
