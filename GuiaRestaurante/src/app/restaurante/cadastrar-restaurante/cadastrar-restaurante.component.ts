import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { RestauranteService } from '../restauranteService';
import { routing } from '../../app.router';

@Component({
  selector: 'app-cadastrar-restaurante',
  templateUrl: './cadastrar-restaurante.component.html',
  styleUrls: ['./cadastrar-restaurante.component.css']
})
export class CadastrarRestauranteComponent implements OnInit {

  router: Router;
  constructor(public http: Http, _router: Router, private restaurante: RestauranteService) {
    this.router = _router;          
  }
  ngOnInit() {
  }

  List(form) {
    console.log(form);
    this.restaurante.create(form.value);
    this.router.navigateByUrl('/restaurante');
    this.router
  }

}
