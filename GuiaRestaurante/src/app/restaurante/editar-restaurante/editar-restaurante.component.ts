import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restauranteService';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-restaurante',
  templateUrl: './editar-restaurante.component.html',
  styleUrls: ['./editar-restaurante.component.css']
})
export class EditarRestauranteComponent implements OnInit {
  restauranteNome:  Object[] = [];
  router: Router;
  constructor(public http: Http, _router: Router, private restaurante: RestauranteService) {
    this.router = _router;          
  }

  ngOnInit() {
  }

  List(form) {
    this.restaurante.update(this.restaurante.restauranteNome);
    this.router.navigateByUrl('/restaurante');
  }


}
