import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  productos:any[] = []
  termino:string="";
  constructor(private _productoService:ProductosService,
    private activatedRoute:ActivatedRoute, 
    private router:Router) { 
    
  }

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.productos = this._productoService.buscarProducto( params['termino'] );
      console.log(this.productos );
    });
  }
  VerHeroe(idx:string){
    this.router.navigate( ['/producto',idx] );
  }

  
  mostrarMarca(marca?: string): string {
    return `../assets/img/${marca}.gif`;
    console.log(event);
  }

}
