import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import { CargarscripService } from 'src/app/service/cargarScript.service';
import { Venta } from 'src/app/models/venta.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { VentasService } from 'src/app/service/ventas.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  venta: Venta=new Venta();
  producto:any = [];
  usuario:any;
  date:any;
  constructor(
    private _Cargarscrip:CargarscripService,
    private activatedRoute: ActivatedRoute, 
    private _productoService:ProductosService,
     public formulario:FormBuilder,
     private _ventaService:VentasService
    ) 
    { 
     this.usuario=localStorage.getItem('token');
      _Cargarscrip.Carga(["producto"]);
      this.activatedRoute.params.subscribe( params =>{
        this.producto = this._productoService.getProducto( params['id'] );
        console.log(this.producto);
        });
        
       this.date=new Date();  
    }   
  ngOnInit(): void {
    
  }
  Comprar(){
    if(localStorage.getItem('token')!=null){
      let modal:any = document.querySelector('#MiModal');
       modal.style.display = 'block';  
    }
    else{
      const modal:any=document.querySelector('#miModal');
      modal.style.display='block';
    }
    
  }
  GuardarVenta( form: NgForm ) {
    if ( form.invalid ) {
      console.log('Formulario no válido');   
      return; 
    }
    console.log(form);
    console.log(this.venta);
    this._ventaService.crearVenta(this.venta).subscribe(resp => {
      console.log(resp);
    });
    form.reset();
}



  cerrar(){
    let modal:any = document.getElementById('MiModal')
    modal.style.display = 'none';
  }
}
