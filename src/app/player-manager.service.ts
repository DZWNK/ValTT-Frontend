import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/models/Player';

const API_URL = 'https://hidden-garden-36045.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class PlayerManagerService {

  constructor(private http: HttpClient) { }

  getPlayerById(id: string): Observable<Player>{
    return this.http.get<Player>(`${API_URL}/player?id=${id}`);
  }

}
