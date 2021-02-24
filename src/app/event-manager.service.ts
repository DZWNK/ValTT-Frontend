import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/Event';

const API_URL = 'https://agile-stream-35042.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  constructor(private http: HttpClient) { }
  
  getAllEvents(page: number, perPage: number): Observable<Event[]>{
    let params = new HttpParams();
    params.append('page', page.toString());
    params.append('perPage', perPage.toString());
    return this.http.get<Event[]>(`${API_URL}/api/events`, {params: params});
  }
  
  getEventById(id: string): Observable<Event>{
    let params = new HttpParams();
    params.append('id', id);
    return this.http.get<Event>(`${API_URL}/api/event`, {params: params});  
  }
}
