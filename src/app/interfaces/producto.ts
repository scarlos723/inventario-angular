import { NumberValueAccessor } from '@angular/forms';

export interface Producto {
    id:number;
    nombre:string;
    marca:string;
    modelo:string;
    ubicacion:string;
    precio:number;
    stock:number;

}