import { NumberValueAccessor } from '@angular/forms';

export interface Cotizacion {
    id:number;
    idCliente?:number;//? el campo no es obligatoriamente requerido 
    nombreCliente?:string; //? el campo no es obligatoriamente requerido
    valor:number;
    tipo:string;
}