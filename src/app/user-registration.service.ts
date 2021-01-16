import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:8080/user-reg", user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/all-user");
  }

  public getUserByUserEmail(email){
    return this.http.get("http://localhost:8080/find-user/"+email);
  }

  public cancelUserRegById(id){
    return this.http.delete("http://localhost:8080/cancel/"+id);
  }

}
