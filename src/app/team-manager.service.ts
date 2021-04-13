import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from 'src/models/Team';
import { TeamPreview } from 'src/models/TeamPreview';

const API_URL = 'https://hidden-garden-36045.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class TeamManagerService {

  constructor(private http: HttpClient) { }

  getVerifiedTeams(){
    return this.http.get<TeamPreview[]>(`${API_URL}/team/verified`);
  }

  getTeamByName(name: string){
    return this.http.get<TeamPreview>(`${API_URL}/team/team?teamName=${name}`);
  }

  createTeam(team: Team){
    return this.http.post<Team>(`${API_URL}/team/newTeam`, team);
  }
}
