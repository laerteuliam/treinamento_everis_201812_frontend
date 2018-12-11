import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../_services/filme.service';
import { Filme } from '../_models/filme.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmes:Filme[]=[];

  constructor(private service:FilmeService) { }
  
  ngOnInit() {
    this.service.getAll().subscribe(data=>{
      this.filmes = data;
    });
  }

}
