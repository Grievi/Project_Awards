import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  

  constructor(private http:HttpClient, private route:Router) {

   }
  
  getApi(){
    return this.http.get(environment.link + `/Project/`)
  }
  
  reviewApi(){
    return this.http.get(environment.link + `/Review/`)
  }
  registerUser(userData: any){
    console.log("It has worked!")
    this.http.post(environment.link + `/accounts/register/`,userData).subscribe(response=>{
      let user:any = response
      this.route.navigate(['login'])
      return user
    },error=>{
      console.log(error)
    })
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

   

   postProj(projectsData: any){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    this.http.post(environment.link + `/Project/`,projectsData, {'headers':headers}).subscribe(response =>{
      return response
    })
  }

}





