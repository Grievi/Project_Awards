import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) {

   }

   getApi(){
     return this.http.get(environment.link + '/Project/')
   }
   loginUser(credentials:any){
    return this.http.post(environment.link + '/api-login/', credentials)
   }

}
