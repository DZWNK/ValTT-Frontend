import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';
import { loginProfile } from '../models/loginProfile';
import { Router } from '@angular/router'

//const API_URL = 'https://agile-stream-35042.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {


  private API_URL_SIGNUP = "http://localhost:5000/auth/signup"
  private API_URL_LOGIN = "http://localhost:5000/auth/login"

  //  private API_URL_SIGNUP = "https://valtt.herokuapp.com/auth/signup"
  //private API_URL_LOGIN = "https://valtt.herokuapp.com/auth/login"
  constructor(private http: HttpClient) { }

  // the signup user method accepts user object and returns the response 
  // the backend api sends whenever it is available
  // our backend api responds with either an error or the registered user
    signup(user) {
      return this.http.post<any>(this.API_URL_SIGNUP, user)
    }
  /*
  signup(profile: Profile): Observable<any>{
    console.log(profile);
    return this.http.post<any>('${API_URL}/api/signup', profile);
  }*/
/*
  login(profile: Profile): Observable<any>{
    console.log(profile);
    return this.http.post<any>('${API_URL}/api/login', profile);  
  }
}
*/
  login(user) {
    return this.http.post<any>(this.API_URL_LOGIN, user)
  }

  loggedIn() {
    //we want a boolean value not the token itself so double negate
    return !!localStorage.getItem('token')
  }
  
  getToken() {
    return localStorage.getItem('token')
  }


}