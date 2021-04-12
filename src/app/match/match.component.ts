import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Match } from "../../models/Match";
import { Game } from "../../models/Game";
import { MatchManagerService } from '../match-manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  
  constructor(private matchManagerService: MatchManagerService, private router: Router, private route: ActivatedRoute) { }

  match: Match;
  game1: Game;
  game2: Game;
  game3: Game;
  game4: Game;
  private matchSub: Subscription;


 activeStatusString1: string;
 activeStatusString2: string;
 activeStatusString3: string;
 activeStatusString4: string;
  ngOnInit(): void {

    this.matchSub = this.matchManagerService.getMatchById(this.route.snapshot.params['id']).subscribe(data=>{
      this.match = data[0];
      console.log(this.match);
    });
    this.match = new Match("123");
 


    this.activeStatusString1 = this.activeStatusBoolConvert(this.match.activeGameStatus[0]);
    this.activeStatusString2 = this.activeStatusBoolConvert(this.match.activeGameStatus[1]);
    this.activeStatusString3 = this.activeStatusBoolConvert(this.match.activeGameStatus[2]);
    this.activeStatusString4 = this.activeStatusBoolConvert(this.match.activeGameStatus[3]);

  }

  activeStatusBoolConvert(i: boolean) {
    console.log(i);
  let status;
  if(i = true){
    status = "ONGOING ";
    return status;
  } else {
    status = "FINISHED ";
    return status;
  }};

  ngOnDestroy(){
  this.matchSub.unsubscribe();
  }
}
