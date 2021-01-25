import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';

const API_URL = 'https://agile-stream-35042.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  constructor(private http: HttpClient) { }

  signup(profile: Profile): Observable<any>{
    console.log(profile);
    return this.http.post<any>('${API_URL}/api/signup', profile);
  }

  login(profile: Profile): Observable<any>{
    console.log(profile);
    return this.http.post<any>('${API_URL}/api/login', profile);  
  }
}
