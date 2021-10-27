import { Component, OnInit } from '@angular/core';
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

  constructor(private api:ProjectService) { }

  callTheApi(){
    this.api.getApi().subscribe((result:any)=>{
      console.log('success', result);
      this.result=result
    })
  }

  ngOnInit(){
    // this.callTheApi()
  }

}
