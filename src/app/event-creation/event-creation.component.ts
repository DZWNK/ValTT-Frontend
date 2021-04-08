import { Component, OnInit} from '@angular/core';
import { Event } from '../../models/Event';
import { MatchPreview } from '../../models/MatchPreview';
import { Team } from 'src/models/Team';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventManagerService } from '../event-manager.service';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  constructor(private eventManagerService: EventManagerService, private router: Router, private route: ActivatedRoute) { }

  event: Event;

  private eventSub: Subscription;

  ngOnInit(): void {
    this.eventSub = this.eventManagerService.getEventById(this.route.snapshot.params['id']).subscribe(data=>{
      this.event = data[0];
      console.log(this.event);
    });
  }

  addBracket() {
    this.event.brackets.push({
      name: "New Bracket",
      pushPerMatch: false,
      pushWinner: 0,
      pushLoser: 0,
      matchesPlayed: 0,
      matches: [
          new MatchPreview("T1", "T2"),
          new MatchPreview("T3", "T4"),
          new MatchPreview("T5", "T6")
      ]
    });
  }

  removeBracket(i: number) {
    this.event.brackets.splice(i, 1);
  }

  increment(match: number) {
    console.log('----- Increment -----');
    let roundMatches = 1;
    let rounds = this.numRounds(match);
    console.log(`rounds: ${rounds}`);
    for(let i=0; i<rounds; i++){
      roundMatches *= 2;
      console.log(`Round: ${i+1} roundMatches: ${roundMatches}`);
    }
    for(let i=0;i<roundMatches;i++){
      console.log(this.event.brackets[match].matches[0]);
      this.event.brackets[match].matches.unshift(new MatchPreview('a', 'b'));
      console.log("End")
    }
    console.log("e2")
    console.log(this.event.brackets[match].matches);
    console.log('----- Increment End -----');
  }

  decrement(match: number) {
    console.log('----- Decrement -----');
    let roundMatches = 1;
    let rounds = this.numRounds(match);
    console.log(`rounds: ${rounds}`);
    for(let i=1; i<rounds; i++){
      roundMatches *= 2;
      console.log(`Round: ${i} roundMatches: ${roundMatches}`);
    }
    for(let i=0; i<roundMatches; i++){
      this.event.brackets[match].matches.shift();
    }
    console.log(this.event.brackets[match].matches);
    console.log('----- Decrement End -----');
  }

  // Calculate number of rounds
   numRounds(match: number): number {
    let roundTotal = 0;
    let length = this.event.brackets[match].matches.length;
    let i = 1;
    if (length > 0) {
      length -= i;
      roundTotal++;
      while (length > 0) {
        length -= (i *= 2);
        roundTotal++;
      }
    }
    return roundTotal;
  }

  selectedTeam(event: any, index: number){
    this.event.teams[index].name = event.target.value;
  }

  view(id: string){
    this.router.navigate(['event/', id]);
  }

  addTeam(){
    console.log("Push");
    console.log(this.event.teams);
    this.event.teams.push(new Team(''));
    console.log(this.event.teams);
  }

  removeTeam(index: number){
    this.event.teams.splice(index, 1);
  }
}
