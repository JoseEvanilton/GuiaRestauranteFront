import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { routing } from './app.router';
import { RestauranteService } from './restaurante/restauranteService';
import { CadastrarRestauranteComponent } from './restaurante/cadastrar-restaurante/cadastrar-restaurante.component';
import { EditarRestauranteComponent } from './restaurante/editar-restaurante/editar-restaurante.component';
import { PratoComponent } from './restaurante/prato/prato.component';
import { CadastrarPratoComponent } from './restaurante/prato/cadastrar-prato/cadastrar-prato.component';
import { EditarPratoComponent } from './restaurante/prato/editar-prato/editar-prato.component';
import { Pesquisa } from './restaurante/restaurante.pesquisa';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestauranteComponent,
    CadastrarRestauranteComponent,
    EditarRestauranteComponent,
    PratoComponent,
    CadastrarPratoComponent,
    EditarPratoComponent,
    Pesquisa

  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [RestauranteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
