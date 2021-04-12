import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/Match';

const API_URL = 'https://hidden-garden-36045.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class MatchManagerService {

  constructor(private http: HttpClient) { }

  getMatchById(id: string): Observable<Match>{
    return this.http.get<Match>(`${API_URL}/match?id=${id}`);
  }
}
