import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/class/profile';
import { ProfileService } from 'src/app/service/profile.service';

 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  response:Profile[]=[]

  constructor(private details:ProfileService) { }

  callGetProfile(){
    this.details.getProfile().subscribe((response:any)=>{
      this.response=response
      return this.response;
    })
  }

  

  ngOnInit(): void {
    this.callGetProfile()
  }

}
