import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../_models/filme.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<Filme[]>(`${environment.api}/filmes`);
  }
}
