import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor(private teamManagerService: TeamManagerService, private router: Router) { }

  ngOnInit(): void {
    this.teamsSub = this.teamManagerService.getVerifiedTeams().subscribe(data=>{
      this.teams = data;
    });
  }

  ngOnDestroy(){
    this.teamsSub.unsubscribe();
  }

  viewTeam(i: number){
    console.log(this.teams[i].id)
    this.router.navigate(['/team', this.teams[i].id]);
  }
}
