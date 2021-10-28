import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  

  constructor(private http:HttpClient) {

   }

   getApi(){

    // let HttpHeaders:any = new HttpHeaders({
    //   'authorization':environment.My_Token
    // })

     return this.http.get(environment.link + `/Project/`)
   }
   loginUser(credentials:any){
     console.log("It has worked!")
    return this.http.post(environment.link + `/api-login/`, credentials).pipe(
      map(user =>{
        let userHolder:any
        userHolder=user
        if(user && userHolder['token']){
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
      })
    )
   }
   logout(){
     localStorage.removeItem('currentUser');
   }
}
