import { Component, OnInit } from '@angular/core';
import { ProductosService,} from 'src/app/service/productos.service';
import { Producto } from 'src/app/models/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  productos:Producto[] = [];
  constructor(
    private _productosService:ProductosService,
    private router:Router) 
    {
      this.productos = this._productosService.getProductos();
   }

  ngOnInit(): void {
  }
  VerHeroe(idx:string){
    this.router.navigate( ['/producto',idx] );
  }

  mostrarMarca(marca?: string): string {
    return `../assets/img/${marca}.gif`;
    console.log(event);
  }
  
}
