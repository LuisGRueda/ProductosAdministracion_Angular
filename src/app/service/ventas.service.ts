import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Usuario } from '../models/usuario.model';
import { Venta } from '../models/venta.model';


@Injectable({
    providedIn: 'root'
  })
export class VentasService {
    private _url = 'https://dbprueba14-default-rtdb.firebaseio.com/';
    usuarios:Usuario[] = [];

    constructor(private http:HttpClient) {
     this.ListarUsuarios();
    }

    crearVenta(ventas:Venta) {
        return this.http.post(`${this._url}/ventas.json`, ventas);
    }    
    getUsuarios(){
      this.ListarUsuarios();
      return this.usuarios;
    }
    getUsuario(usuario:string){
      for( let i = 0; i < this.usuarios.length; i ++){
        if(this.usuarios[i].usuario==usuario){
          return this.usuarios[i];
        }      
      }
      return "";    
    }
    ListarUsuarios() {
        this.http.get(`${this._url}/usuarios.json`).subscribe((res: any) => {
          const data = this.formatJsonToArray(res, this.usuarios);
          console.log(data);
          })
    }
    formatJsonToArray(data: any, array: Usuario[]): Usuario[] {
        Object.keys(data).forEach((key: string) => {
          const usuarioActual = data[key];
     
          let usuarioTemporal = {
            id: key,
            nombre: usuarioActual.nombre,
            apellido:usuarioActual.apellido,
            correo: usuarioActual.correo,
            usuario: usuarioActual.usuario,
            contrasenia: usuarioActual.contrasenia,
          };
          array.push(usuarioTemporal);
        });
        return array;
    }

    VerUsuario( termino:string ):Usuario[]{

      let usuarioArr:Usuario[] = [];
      termino = termino.toLowerCase();
 
      for( let i = 0; i < this.usuarios.length; i ++ ){
 
        let usuario = this.usuarios[i];
 
        let nombre = usuario.usuario.toLowerCase();
 
        if( nombre.indexOf( termino ) >= 0  ){
         
          usuarioArr.push( usuario )
        }
 
      }
      // if(heroesArr.length<=0){
      //   alert("no hay");
      // }
      return usuarioArr; 
    }

      
}
