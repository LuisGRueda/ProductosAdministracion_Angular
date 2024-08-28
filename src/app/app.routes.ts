import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';  
import { ProductoComponent } from './components/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { JoinComponent } from './components/join/join.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoryComponent } from './components/category/category.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path:'producto/:id', component:ProductoComponent},
    { path: 'buscador/:termino', component: BuscadorComponent },
    { path: 'list-producto', component: ListProductosComponent },
    { path: 'join', component: JoinComponent },
    { path: 'categoria/:category', component: CategoryComponent },
    { path: 'perfil/:user', component: PerfilComponent,  canActivate:[AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
   
  ];
 
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});