import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  productos:any[] = [];
  category:string="";
  constructor(private _productoService:ProductosService,
    private activatedRoute:ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.category =params['category'];
      this.productos = this._productoService.getCategorias( params['category'] );
      console.log(this.productos );
    });
  }
  
  mostrarMarca(marca?: string): string {
    return `../assets/img/${marca}.gif`;
    console.log(event);
  }

}
