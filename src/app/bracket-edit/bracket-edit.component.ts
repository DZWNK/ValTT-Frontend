import { Component, Input, IterableDiffer, IterableDiffers, IterableChanges, OnInit, DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { MatchPreview } from '../../models/MatchPreview';
import { Team } from '../../models/Team';

@Component({
  selector: 'app-bracket-edit',
  templateUrl: './bracket-edit.component.html',
  styleUrls: ['./bracket-edit.component.css']
})
export class BracketEditComponent implements OnInit {

  @Input('matches')
  matches: Array<MatchPreview>;

  @Input('teams')
  teams: Array<Team>;

  roundTotal: number;
  rounds: Array<Array<number>>;
  _diff: IterableDiffer<MatchPreview>;

  constructor(private router: Router, private _itterableDiffers: IterableDiffers) { }

  ngOnInit(): void {
    console.log("INITIALIZATION")
    console.log("teams:")
    console.log(this.teams)
    console.log("matches:")
    console.log(this.matches)
    console.log(this.matches[0].match.teams[0].name)
    //this.teams = ["Cloud 9", "NRG", "Luminosity", "Gen G"];
    //console.log(this.matches[0].winner);
    this._diff = this._itterableDiffers.find(this.matches).create();
    this.populateBracket();
  }
  
  ngDoCheck(): void{
    console.log("Do Check");
    console.log(this.teams)
    const changes: IterableChanges<MatchPreview> = this._diff.diff(this.matches);
    if(changes){
      this.populateBracket();
    }
  }

  loadMatch(index: number): void {
    this.router.navigate(['match', this.matches[index].match.id]);
  }

  loadNextMatch(index: number): void{
    this.router.navigate(['match', this.matches[index+1].match.id]);
  }

  populateBracket() {
    console.log('matches:');
    console.log(this.matches);
    this.findRounds();
    // Initialize Arrays
    if (this.roundTotal > 0) {
      this.rounds = Array(this.roundTotal);
      for (let i = 0; i < this.rounds.length; i++) {
        this.rounds[i] = Array(0);
        console.log(`Round ${i}: initialized`);
      }
      // Populate first round
      let roundMatches = 1;
      let matchIndex = (this.matches.length - 1);
      this.rounds[(this.roundTotal-1)] = Array(1);
      this.rounds[(this.roundTotal-1)][0] = matchIndex--;
      // Populate later rounds
      for (let i = (this.roundTotal - 2); i >= 0; i--) {
        this.rounds[i] = Array(roundMatches*=2);
        for (let ii = 0; ii < this.rounds[i].length; ii++) {
          this.rounds[i][ii] = matchIndex--;
        }
      }
    }
    console.log(`roundTotal: ${this.roundTotal}`);
    console.log('rounds:');
    console.log(this.rounds);
  }

  findRounds(){
    this.roundTotal = 0;
    let length = this.matches.length;
    let i = 1;
    if (length > 0) {
      length -= i;
      this.roundTotal++;
      while (length > 0) {
        length -= (i *= 2);
        this.roundTotal++;
      }
    }
  }

  selectedTeam(event: any, match: any, team: number){
    console.log(`Match: ${match} \t Team: ${team}`);
    console.log(`target value: ${event.target.value}`);
    console.log(`old value: ${this.matches[match].match.teams[team].name}`);
    this.matches[match].match.teams[team].name = event.target.value;
    console.log(`new value: ${this.matches[match].match.teams[team].name}`);
  }

  win(match: number, team: number){
    console.log(`Match: ${match} | Team: ${team}`);
  }

}
