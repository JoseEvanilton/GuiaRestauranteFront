import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RestauranteService } from '../restauranteService';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {
  router: Router
  pratos: Object[] = [];
  nome: string;
  constructor(public http: Http, _router: Router, private restaurante: RestauranteService) {
    this.router = _router;    
    this.getOnePrato(this.restaurante.restauranteNome);
  }
  ngOnInit() {
    console.log(this.pratos);
  }

  cadastrar(rest){
    this.restaurante.pratos = this.restaurante.restauranteNome;
    this.restaurante.restauranteNome = rest;
    this.router.navigateByUrl('restaurante/pratos/cadastrar');
  }
  editar(rest){
    console.log(rest);
    this.restaurante.pratos = rest;
    this.router.navigateByUrl('restaurante/pratos/editar');
  }

  getOnePrato(nome: string) {
    this.restaurante.pratoAll(nome)
      .then((result: any) => {
        this.pratos = result;
      });
  }
  deletar(rest) {
    this.restaurante.pratos = rest;
    this.restaurante.pratoDelete(this.restaurante.pratos)
    .subscribe(null);
    this.getOnePrato(this.restaurante.restauranteNome);
  }
}
