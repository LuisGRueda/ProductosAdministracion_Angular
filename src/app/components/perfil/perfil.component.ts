import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario:any;
  user:any;
  constructor(private _usuariosService:UsuariosService,private activatedRoute: ActivatedRoute) { 
    this.usuario=localStorage.getItem('token')
    this.user=this._usuariosService.getUsuario(this.usuario);
    console.log(this.user);
  }
  
  ngOnInit(): void {
  }

}
