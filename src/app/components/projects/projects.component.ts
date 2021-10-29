import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/projects';
import { ProjectService } from 'src/app/service/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  result:Project[]=[]
  

  constructor(private api:ProjectService) { }

  callProjectApi(){ 
    this.api.getApi().subscribe((result:any)=>{
      this.result=result
      console.log('success', this.result);
    })
        
      }
    
  
  ngOnInit(): void {
    this.callProjectApi()
  }

}
