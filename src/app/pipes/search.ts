import { from } from 'rxjs';
import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform{
    public transform(value:any , args:string){ //Se debe especificar que value es de tipo any
        if(!value){ //controlar cuando el value es vacio
            return;
        }
        if(!args){  //control por si no has colocado nada en la barra de busqueda
            return value; // para que se siga presentando los elementos asi no se halla tecleado nada 
        }
        args = args.toLowerCase();//pasar a minusculas
        return value.filter( (item:any) => { //Se debe especificar que item es de tipo any
            return JSON.stringify(item).toLowerCase().includes(args);//busca para cada item si inculle la palabra args y la retorna
        });
    
    
    }
}