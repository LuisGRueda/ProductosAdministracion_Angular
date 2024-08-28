import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Producto } from '../models/producto.model';

@Injectable({
    providedIn: 'root'
  })
export class ProductosService {
    private _url = 'https://proyectofinal-c7afa-default-rtdb.firebaseio.com/';
    private _urlCatPer = 'https://proyectofinal-c7afa-default-rtdb.firebaseio.com/productos.json?orderBy=%22categoria%22&equalTo=%22Perif%C3%A9ricos%22';
    private _urlCatCom = 'https://proyectofinal-c7afa-default-rtdb.firebaseio.com/productos.json?orderBy=%22categoria%22&equalTo=%22Componentes%22';
    productos:Producto[] = [];
    productoCat:Producto[] = [];

    constructor(private http:HttpClient) {
        this.listarProductos();
    }
    getProductos() {
        return this.productos;
    }
     
    getProducto( idx: string ){
      for(let i = 0; i < this.productos.length; i ++ )
      {
        if(this.productos[i].nombre==idx)
        {
            return this.productos[i];
        }
      } 
      return"";
      }

    getCategorias(category:string){
      this.productoCat =[];
      if(category=="Perifericos"){        
          this.http.get(`${this._urlCatPer}`).subscribe((res: any) => {
            const data = this.formatJsonToArray(res, this.productoCat);
            console.log(data);
          });    
      }
      if(category=="Componentes"){        
        this.http.get(`${this._urlCatCom}`).subscribe((res: any) => {
          const data = this.formatJsonToArray(res, this.productoCat);
          console.log(data);
        });    
    }
      return this.productoCat;
    }
    listarProductos() {
        this.http.get(`${this._url}/productos.json`).subscribe((res: any) => {
          const data = this.formatJsonToArray(res, this.productos);
          console.log(data);
        });
      }
      formatJsonToArray(data: any, array: Producto[]): Producto[] {
        Object.keys(data).forEach((key: string) => {
          const productoActual = data[key];
     
          let productoTemporal = {
            id: key,
            nombre: productoActual.nombre,
            descripcion: productoActual.descripcion,
            img: productoActual.img,
            marca: productoActual.marca,
            precio: productoActual.precio,
            categoria: productoActual.categoria,
          };
          array.push(productoTemporal);
        });
        return array;
      }

    buscarProducto( termino:string ):Producto[]{

        let productosArr:Producto[] = [];
        termino = termino.toLowerCase();
   
        for( let i = 0; i < this.productos.length; i ++ ){
   
          let producto = this.productos[i];
   
          let nombre = producto.nombre.toLowerCase();
          let descripcion = producto.descripcion.toLowerCase();
   
          if( nombre.indexOf( termino ) >= 0 ||descripcion.indexOf( termino ) >= 0 ){
           
            productosArr.push( producto )
          }
   
        }
        // if(heroesArr.length<=0){
        //   alert("no hay");
        // }
        return productosArr;
        
      } 
}
