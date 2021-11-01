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

  project_name: string =''
  description: string =''
  project_img: any =''
  project_url: any =''

  

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
  onImageChange(event: any){
    this.project_img = event.target.files[0]
  }

  postProject(){
    let projectForm= new FormData();
    projectForm.append('project_name', this.project_name)
    projectForm.append('description', this.description)
    projectForm.append('project_url', this.project_url)
    projectForm.append('project_img', this.project_img)
    console.log(projectForm)
    this.api.postProj(projectForm)

  }

}
