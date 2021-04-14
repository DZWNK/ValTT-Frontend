import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';

const API_URL = 'https://hidden-garden-36045.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  constructor(private http: HttpClient) { }

  getGameById(id: string): Observable<Game>{
    return this.http.get<Game>(`${API_URL}/game?id=${id}`);
  }
}
