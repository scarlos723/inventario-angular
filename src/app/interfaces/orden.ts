import { NumberValueAccessor } from '@angular/forms';

export interface Orden {
    id:number;
    idCliente?:number;
    nombreCliente?:string;
    valor:number;
    estado:string;
    tipo:string;
}