import { Component, Input, IterableDiffer, IterableDiffers, IterableChanges, OnInit, DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { MatchPreview } from 'src/models/MatchPreview';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent implements OnInit{

  @Input('matches')
  matches: Array<MatchPreview>;

  teams: Array<string>;

  roundTotal: number;
  rounds: Array<Array<number>>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.populateBracket();
  }

  loadMatch(index: number): void {
    this.router.navigate(['match', this.matches[index].match.id]);
  }

  loadNextMatch(index: number): void{
    console.log(index);
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
    console.log(event.target.value);
  }

}

