import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Team } from 'src/models/Team';
import { TeamPreview } from 'src/models/TeamPreview';
import { TeamManagerService } from '../team-manager.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Array<TeamPreview>;

  teamsSub: Subscription;

  constructor(private teamManagerService: TeamManagerService) { }

  ngOnInit(): void {
    this.teamsSub = this.teamManagerService.getVerifiedTeams().subscribe(data=>{
      this.teams = data;
    });
  }

  ngOnDestroy(){
    this.teamsSub.unsubscribe();
  }

}
