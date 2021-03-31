import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventPreview } from '../models/EventPreview';

const API_URL = 'https://ancient-river-08888.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  constructor(private http: HttpClient) { }
  
  getAllVerifiedEvents(page: number, perPage: number): Observable<EventPreview[]>{
    let params = new HttpParams();
    params.append('page', page.toString());
    params.append('perPage', perPage.toString());
    //return this.http.get<EventPreview[]>(`${API_URL}/event/verified`, {params: params});
    return this.http.get<EventPreview[]>(`https://ancient-river-08888.herokuapp.com/event/verified`);
  }
  
  getAllUnverifiedEvents(page: number, perPage: number): Observable<EventPreview[]>{
    let params = new HttpParams();
    params.append('page', page.toString());
    params.append('perPage', perPage.toString());
    return this.http.get<EventPreview[]>(`${API_URL}/event/unverified`, {params: params});
  }

  getEventById(id: string): Observable<EventPreview>{
    let params = new HttpParams();
    params.append('id', id);
    return this.http.get<EventPreview>(`${API_URL}/api/event`, {params: params});  
  }
}
