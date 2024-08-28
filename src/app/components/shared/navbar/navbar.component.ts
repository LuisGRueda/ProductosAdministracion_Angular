import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CargarscripService } from 'src/app/service/cargarScript.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuarios:Usuario[] = [];
  formularioContacto:FormGroup;
  loguser:any;
  roluser:any;

  constructor(
    private _Cargarscrip:CargarscripService,
    private router:Router,
    private _usuariosService:UsuariosService,
    public formulario:FormBuilder) {
    _Cargarscrip.Carga(["navbar"]);
    this.usuarios= this._usuariosService.getUsuarios();
    this.formularioContacto=this.formulario.group({
      user:[''],
      pass:['']
    });
   }
  ngOnInit(): void {
    this.verificarLogin();
  }
 cargar(){ 
  this.usuarios= this._usuariosService.getUsuarios();
 }
  VerPerfil(){
    this.router.navigate( ['/perfil',this.loguser] );
  }

  buscarTermino( termino:string ){
    console.log(termino);
    this.router.navigate( ['/buscador',termino] );
  }
  registrar( ){
    const modal:any=document.querySelector('#miModal');
      const loged:any=document.querySelector('#loged');
      const logi:any=document.querySelector('#logi'); 
      const ale:any=document.querySelector('#alert');   
      ale.style.display='none';  
      modal.style.display='none';
      this.formularioContacto.reset();
      loged.style.display='block';
      logi.style.display='none';
      this.router.navigate( ['/join'] );
  }


 comprobar():void{
   let valor=this.formularioContacto.value; 
  for (var i = 0; i <= this.usuarios.length; i++) {
    if(this.usuarios[i].usuario==valor.user &&this.usuarios[i].contrasenia==valor.pass){
      const modal:any=document.querySelector('#miModal');
      const loged:any=document.querySelector('#loged');
      const logi:any=document.querySelector('#logi'); 
      const ale:any=document.querySelector('#alert');   
      ale.style.display='none';  
      modal.style.display='none';
      console.log("bienvenidos admin");
      this.formularioContacto.reset();
      loged.style.display='block';
      logi.style.display='none';
      this.loguser=valor.user;
      this.roluser="1";
      this.grabar_localstorage();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Iniciaste sesion',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else
    {
      const ale:any=document.querySelector('#alert');   
      ale.style.display='block';
    }
  }
 }
 logout(){
  const loged:any=document.querySelector('#loged');
  const logi:any=document.querySelector('#logi');
  loged.style.display='none';
  logi.style.display='block';
  this.loguser="";
  this.router.navigate(['home']);
  localStorage.clear();
 }
 
 grabar_localstorage(){
    localStorage.setItem('token',this.loguser);
    localStorage.setItem('rol',this.roluser)
 }

 verificarLogin(){
   if(localStorage.getItem('token')!=null)
   {
    const loged:any=document.querySelector('#loged');
    const logi:any=document.querySelector('#logi'); 
    loged.style.display='block';
    logi.style.display='none';
    this.loguser=localStorage.getItem('token');
   }
 }
}

