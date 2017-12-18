
import { RestauranteComponent } from './restaurante.component';
import 'rxjs/add/operator/map';
import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RestauranteService {
    
    private apiUrl: any = 'http://localhost:61277/api/';

    restaurantes: any;
    pratos: any;
    headers: Headers;

    restauranteNome: any;
    restauranteEdit: string;

    constructor(public http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.getAll();

    }

    getAll() {
        this.http.get(this.apiUrl + 'restaurante/getAll')
            .map(res => res.json())
            .subscribe(
            restaurantes => this.restaurantes = restaurantes,
            erro => console.log(erro)
            );
    }

    getOne(nome) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + 'restaurante/getOne/' + nome.nome)
                .subscribe((result: any) => {
                    resolve(result.json());
                },
                (error) => {
                    reject(error.json());
                });
        });
    }

    
    delete(nome:string) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.apiUrl + 'restaurante/deleta/' + nome)
                .subscribe((result: any) => {
                    resolve(result.json());
                },
                (error) => {
                    reject(error.json());
                });
        });
        }

        update(restauranteNome) {
            return new Promise((resolve, reject) => {
                const data = {
                id: restauranteNome.restauranteId,
                nome: restauranteNome.nome,
                telefone: restauranteNome.telefone,
                bairro: restauranteNome.bairro,
                rua: restauranteNome.rua,
                numero: restauranteNome.numero
                };
        
                this.http.put(this.apiUrl + 'restaurante/update', data)
                .subscribe((result: any) => {
                    resolve(result.json());
                },
                (error) => {
                    reject(error.json());
                });
            });
            }
        private extractData(res: Response): any {
          let data;
          if (res.ok) {
            try {
              data = res.json();
            }catch (ex) {
              data = {};
            }
          }
          return data;
        }


        create(restauranteNome) {
            return new Promise((resolve, reject) => {
              const data = {
                nome: restauranteNome.nome,
                telefone: restauranteNome.telefone,
                bairro: restauranteNome.bairro,
                rua: restauranteNome.rua,
                numero: restauranteNome.numero
              };
    
              this.http.post(this.apiUrl + 'restaurante/create', data)
                .subscribe((result: any) => {
                  resolve(result.json());
                },
                (error) => {
                  reject(error.json());
                });
            });
          }


          pratoAll(nome) {
            return new Promise((resolve, reject) => {
                this.http.get(this.apiUrl + 'pratos/getAll/' + nome.nome)
                    .subscribe((result: any) => {
                        resolve(result.json());
                    },
                    (error) => {
                        reject(error.json());
                    });
            });
        }

        pratoCreate(restauranteNome) {
            return new Promise((resolve, reject) => {
              const data = {
                restaurante: restauranteNome.restaurante,
                nome: restauranteNome.nome,
                preco: restauranteNome.preco,
              };
    
              this.http.post(this.apiUrl + 'pratos/create', data)
                .subscribe((result: any) => {
                  resolve(result.json());
                },
                (error) => {
                  reject(error.json());
                });
            });
          }

          pratoUpdate(pratos) {
            return new Promise((resolve, reject) => {
              const data = {
                id: pratos.pratoId,
                nome: pratos.nome,
                preco: pratos.preco,
              };
    
              this.http.put(this.apiUrl + 'pratos/update', data)
                .subscribe((result: any) => {
                  resolve(result.json());
                },
                (error) => {
                  reject(error.json());
                });
            });
          }
          pratoDelete(pratos) {
            
                    return this.http.delete(this.apiUrl + 'pratos/deleta/' + pratos.nome)
                    .map(res => res.json());
                }
    
}

