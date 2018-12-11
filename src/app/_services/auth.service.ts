import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LoginModel } from './../_models/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router) { }

  login(model:LoginModel){
    return this.http.post<any>(`${environment.api}/token`,model)
    .pipe(map(user=>{
      if(user && user.token){
        console.log(user);
        localStorage.setItem('token', user.token);
      }
      return user;
    }))
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  authenticated():boolean{
    return (localStorage.token);
  }

  get token(){
    return localStorage.token;
  }
}
