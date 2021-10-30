import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../service/project.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private service: ProjectService,private route:Router) { }

  retrieve(){
    let loginForm = new FormData();
    loginForm.append('username',this.username)
    loginForm.append('password',this.password)
    this.service.loginUser(loginForm)
  }

  logout(){
    
    sessionStorage.removeItem('currentUser')
    console.log("logged out")
    this.route.navigate(['main'])
    ;
  }

  ngOnInit(): void {
  }

}
