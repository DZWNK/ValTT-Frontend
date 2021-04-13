import { Component, OnInit} from '@angular/core';
import { Event } from '../../models/Event';
import { MatchPreview } from '../../models/MatchPreview';
import { Team } from 'src/models/Team';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventManagerService } from '../event-manager.service';
import { TeamManagerService } from '../team-manager.service';
import { TeamPreview } from 'src/models/TeamPreview';
import { date } from 'joi';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  constructor(
    private eventManagerService: EventManagerService,
    private teamManagerService: TeamManagerService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  teams: Array<TeamPreview>;
  tmp: TeamPreview;
  event: Event;
  show: number;
  players: Array<string>;

  private eventSub: Subscription;
  private teamsSub: Subscription;
  private tmpSub: Subscription;

  ngOnInit(): void {
    this.show = -1;
    this.players = ['','','','','']
    this.eventSub = this.eventManagerService.getEventById(this.route.snapshot.params['id']).subscribe(data=>{
      this.event = data;
      // console.log('Event:')
      // console.log(this.event);
    });
    this.teamsSub = this.teamManagerService.getVerifiedTeams().subscribe(data=>{
      this.teams = data;
      // console.log('Teams:')
      // console.log(this.teams);
    });
  }

  ngOnDestroy(): void{
    this.eventSub.unsubscribe();
    this.teamsSub.unsubscribe();
    if(this.tmpSub){
      this.tmpSub.unsubscribe();
    }
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
    // console.log('----- Increment -----');
    // console.log("MATCHES_START:")
    // console.log(this.event.brackets[match].matches);
    let roundMatches = 1;
    let rounds = this.numRounds(match);
    // console.log(`rounds: ${rounds}`);
    for(let i=0; i<rounds; i++){
      roundMatches *= 2;
      // console.log(`Round: ${i+1} roundMatches: ${roundMatches}`);
    }
    for(let i=0;i<roundMatches;i++){
      // console.log(this.event.brackets[match].matches[0]);
      if(this.event.brackets[match].matches[i]){
        this.event.brackets[match].matches.unshift(new MatchPreview('', ''));
      }
      // console.log("End")
    }
    // console.log("MATCHES_END")
    // console.log(this.event.brackets[match].matches);
    // console.log('----- Increment End -----');
  }

  decrement(match: number) {
    // console.log('----- Decrement -----');
    let roundMatches = 1;
    let rounds = this.numRounds(match);
    // console.log(`rounds: ${rounds}`);
    for(let i=1; i<rounds; i++){
      roundMatches *= 2;
      // console.log(`Round: ${i} roundMatches: ${roundMatches}`);
    }
    for(let i=0; i<roundMatches; i++){
      this.event.brackets[match].matches.shift();
    }
    // console.log(this.event.brackets[match].matches);
    // console.log('----- Decrement End -----');
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
    this.event.teams[index].teamName = event.target.value;
    let tmp: any;
    this.tmpSub = this.teamManagerService.getTeamByName(event.target.value).subscribe(data=>{
      // console.log(`Subscription Resolve:`);
      // console.log(data)
      tmp = data;
      if(tmp?.message){
        this.show = index;
      }
    })
  }

  view(id: string){
    this.router.navigate(['event/', id]);
  }

  addTeam(){
    this.event.teams.push(new Team('', ['','','','','']));
  }

  removeTeam(index: number){
    this.event.teams.splice(index, 1);
  }

  closeOverlay(){
    this.show = -1;
  }

  saveEvent(){
    console.log("SAVING EVENT")
    console.log(this.event);
    this.eventManagerService.updateEvent(this.event._id, this.event).subscribe(data =>{
      console.log("SAVING EVENT SUBSCRIPTION")
      console.log(data)
    })
  }

  receiveUpdate($event){
    console.log("RECEIVING UPDATE")
    console.log($event);
    this.event.brackets[$event.index].matches = $event.matches;
  }

  saveTeam(){
    this.teamManagerService.createTeam(new Team(this.event.teams[this.show].teamName, this.players)).subscribe(data=>{
      console.log("SAVING TEAM SUBSCRIPTION")
      console.log(data)
    });
    this.players = ['','','','',''];
    this.show = -1;
  }
}
