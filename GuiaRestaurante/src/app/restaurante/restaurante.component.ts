import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RestauranteService } from './restauranteService';


@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
  router: Router;
  restauranteNome:  Object[] = [];
 
  nome: string;
  constructor(public http: Http, _router: Router, private restaurante: RestauranteService) {
    this.router = _router;    
  }

  ngOnInit() {
    this.restaurante.getAll();
  }

  detalhe(rest){
      this.restaurante.restauranteNome = rest;
      this.router.navigateByUrl('/restaurante/pratos');
  }
  deletar(rest){
    this.restaurante.restauranteNome = rest;
     this.restaurante.delete(rest.nome);
    this.router.navigateByUrl('/restaurante');
  }
  editar(rest){
    this.restaurante.restauranteNome = rest;
    this.router.navigateByUrl('/restaurante/editar');
  }
  cadastrar(){
    
    this.router.navigateByUrl('/restaurante/cadastrar');
  }

}
