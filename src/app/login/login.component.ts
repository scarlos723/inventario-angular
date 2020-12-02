import { NONE_TYPE, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { User } from '../interfaces/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  adminUser: User = {
    id: 1,
    usuario: 'Admin',
    contraseña: '123456',
    rol: 'Admin'
  }

  constructor(private router:Router, private fb: FormBuilder) {

    

    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
   


    localStorage.setItem('user', JSON.stringify(this.adminUser));

  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    
    if (this.loginForm.value.username == this.adminUser.usuario && this.loginForm.value.password == this.adminUser.contraseña) { // aparece error por que userobj al principio no tiene la propiedad usuario
      
      this.router.navigate(["/lista-productos"]);
      }else{
        alert("Error en usuario o contraseña")
      }
    
  }
  //console.log(userobj); 



}





