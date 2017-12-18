import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RestauranteService } from '../../restauranteService';

@Component({
  selector: 'app-editar-prato',
  templateUrl: './editar-prato.component.html',
  styleUrls: ['./editar-prato.component.css']
})
export class EditarPratoComponent implements OnInit {

  restauranteNome:  Object[] = [];
  router: Router;
  constructor(public http: Http, _router: Router, private restaurante: RestauranteService) {
    this.router = _router;          
  }
  ngOnInit() {
  }
  List(form) {
    this.restaurante.pratoUpdate(this.restaurante.pratos);
    this.router.navigateByUrl('/restaurante');
  }

}
