import { Component, OnInit } from '@angular/core';
import { CargarscripService } from 'src/app/service/cargarScript.service';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:Producto[] = [];
  constructor(
    private _productosService:ProductosService,
    private _Cargarscrip:CargarscripService,
    private router:Router) 
    {
      //this.productos = this._productosService.getProductos();
      _Cargarscrip.Carga(["home"]);
   }
  ngOnInit(): void {
    this.productos=this._productosService.getProductos();
  }

  VerHeroe(idx:string){
    this.router.navigate( ['/producto',idx] );
  }
  mostrarMarca(marca?: string): string {
    return `../assets/img/${marca}.gif`;
    console.log(event);
  }
  VerCat(idx:string){
    console.log('holllaa')
    this.router.navigate( ['categoria',idx] );
    
  }
}
