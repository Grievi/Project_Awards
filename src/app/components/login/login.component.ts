import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../service/project.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ProjectService) { }

  retrieve(){
    return this.service
  }

  ngOnInit(): void {
  }

}
