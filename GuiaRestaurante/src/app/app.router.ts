import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { HomeComponent } from './home/home.component';
import { EditarRestauranteComponent } from './restaurante/editar-restaurante/editar-restaurante.component';
import { CadastrarRestauranteComponent } from './restaurante/cadastrar-restaurante/cadastrar-restaurante.component';
import { PratoComponent } from './restaurante/prato/prato.component';
import { CadastrarPratoComponent } from './restaurante/prato/cadastrar-prato/cadastrar-prato.component';
import { EditarPratoComponent } from './restaurante/prato/editar-prato/editar-prato.component';



const routes: Routes = [

        {path: 'home', component: HomeComponent},    
        {path: 'restaurante', component: RestauranteComponent},
        {path: 'restaurante/editar', component: EditarRestauranteComponent},
        {path: 'restaurante/cadastrar', component: CadastrarRestauranteComponent},
        {path: 'restaurante/pratos', component: PratoComponent},
        {path: 'restaurante/pratos/cadastrar', component: CadastrarPratoComponent},
        {path: 'restaurante/pratos/editar', component: EditarPratoComponent},
        {path: '**', component: HomeComponent},
         {path: '', component: HomeComponent}
        
   
    ];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);