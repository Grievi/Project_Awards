import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../projects'
import { ProjectService} from '../../service/project.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // data:data[]=[]
  result:Project[]=[]
  router: any;

  constructor(private api:ProjectService) { }

  callTheApi(){
    this.api.getApi().subscribe((result:any)=>{
      this.result=result
      console.log('success', this.result);
    })
  }

  ngOnInit(){
    this.callTheApi()
  }

}