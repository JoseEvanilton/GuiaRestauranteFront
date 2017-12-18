import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RestauranteService } from '../../restauranteService';

@Component({
  selector: 'app-cadastrar-prato',
  templateUrl: './cadastrar-prato.component.html',
  styleUrls: ['./cadastrar-prato.component.css']
})
export class CadastrarPratoComponent implements OnInit {
  pratos: Object[] = [];
  router: Router
  constructor(public http: Http, _router: Router, private restaurante: RestauranteService) {
    this.router = _router;    
  }
  ngOnInit() {
    this.pratos = this.restaurante.pratos;
  }

  List(form) {
    console.log(form);
    this.restaurante.pratoCreate(form.value);
    this.router.navigateByUrl('/restaurante');
  //  this.router
  }
}
