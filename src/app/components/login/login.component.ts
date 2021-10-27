import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../service/project.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private service: ProjectService) { }

  retrieve(){
    let loginForm = new FormData();
    loginForm.append('username',this.username)
    loginForm.append('password',this.password)

    return this.service.loginUser(loginForm).subscribe(response=>{
      console.log(response)
    })
  }

  ngOnInit(): void {
  }

}
