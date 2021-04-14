import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Team } from 'src/models/Team';
import { TeamManagerService } from '../team-manager.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Team;

  teamSub: Subscription;

  constructor(private teamManagerService: TeamManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.teamSub = this.teamManagerService.getTeamById(this.route.snapshot.params['id']).subscribe(data=>{
      console.log(data)
      this.team = data;
    })
  }

  ngOnDestroy(){
    this.teamSub.unsubscribe()
  }

  viewPlayer(i: number){
    this.router.navigate(['/player', this.team.currentRoster[i]._id]);
  }

}
