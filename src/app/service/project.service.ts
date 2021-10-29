import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  

  constructor(private http:HttpClient, private route:Router) {

   }

   getApi(){
    // let HttpHeaders:any = new HttpHeaders({
    //   'authorization':environment.My_Token
    // })
     return this.http.get(environment.link + `/Project/`)
   }

   reviewApi(){
     return this.http.get(environment.link + `/Review/`)
   }

   loginUser(credentials:any){
     console.log("It has worked!")  
     this.http.post(environment.link + `/api-login/`, credentials).subscribe(response =>{
       let token:any = response
       sessionStorage.setItem('token',token['token'])
       this.route.navigate(['projects'])
     }, error=>{
       console.log(error)
     })
   }
   logout(){
     sessionStorage.removeItem('currentUser');
   }
}
