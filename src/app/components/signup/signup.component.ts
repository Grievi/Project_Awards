import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    username: string = '';
    password: string = ''
    password_confirm : string = ''
    first_name : string = ''
    last_name : string = ''
    email : any = ''


  constructor(private authService: ProjectService) { }

  onSubmit(){
    let registerForm = new FormData();
    registerForm.append('username', this.username)
    registerForm.append('first_name', this.first_name)
    registerForm.append('last_name', this.last_name)
    registerForm.append('email', this.email)
    registerForm.append('password', this.password)
    registerForm.append('password_confirm', this.password_confirm)
    console.log(registerForm)
    this.authService.registerUser(registerForm)
  }


  ngOnInit(): void {
  }

}