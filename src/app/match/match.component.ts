import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Match } from "../../models/Match";
import { TeamPreview } from "../../models/TeamPreview";
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

  private matchSub: Subscription;


  ngOnInit(): void {

    this.matchSub = this.matchManagerService.getMatchById(this.route.snapshot.params['id']).subscribe(data=>{
      this.match = data;
      console.log(this.match);
    });
   



  }


  ngOnDestroy(){
  this.matchSub.unsubscribe();
  }
}
