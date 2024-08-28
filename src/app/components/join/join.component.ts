import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Usuario } from 'src/app/models/usuario.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  usuarios: Usuario =new Usuario();
  constructor(private _usuariosServices:UsuariosService) { }

  ngOnInit(): void {
  }

  guardar(form: NgForm) {
    
    if ( form.invalid || this.validacion(this.usuarios)==false) {
      const ale:any=document.querySelector('#ale');   
      ale.style.display='block'; 
      console.log('Formulario no válido');     
      return;
      
    }
    else{
      Swal.fire({
        title: 'Estas deguro de registrarte?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero registrarme!'
      }).then((result) => {
        if (result.isConfirmed) {
          const ale:any=document.querySelector('#alert');   
          ale.style.display='none';  
          console.log(form);
          console.log(this.usuarios);
          this._usuariosServices.crearUsuario(this.usuarios).subscribe(resp => {
            console.log(resp);
          });
          form.reset();
          Swal.fire(
            'success!',
            'te registraste con exito',
            'success'
          )
        }
      })
    }
   
  }
  validacion(usuario:Usuario){
    if(usuario.nombre.length<5){ 
      return false;
    }
    else if(usuario.usuario.length<5)
    {
      return false;
    }
    else{
      return true;
    }
  }
  
}
