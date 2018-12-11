import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../_services/auth.service';
import { Router } from '@angular/router';
import { LoginModel } from './../_models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        login: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

get formulario(){ return this.loginForm.controls; };

  onSubmit() {
    if (this.loginForm.invalid) return;
    
    var model = new LoginModel();
    model.Login = this.formulario.login.value;
    model.Password = this.formulario.password.value;

    this.authService
      .login(model)
      .subscribe(data => {
        console.log('logado!');
        this.router.navigate([''])
      },
        error => {
          alert('Usuário/Senha incorretos!');
        }
      );
  }


}
