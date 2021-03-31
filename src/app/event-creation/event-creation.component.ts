import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Event } from '../../models/Event';
import { MatchPreview } from 'src/models/MatchPreview';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  constructor() { }

  event: Event;

  ngOnInit(): void {
    console.log("Init");
    this.event = new Event;
    this.event.id = "123abc";
    this.event.name = "E1 ValTT";
    this.event.runningStatus = true;
    this.event.dateCreated = new Date();
    this.event.startDate = new Date();
    this.event.endDate = new Date();
    this.event.watchLink = "https://google.ca";
    this.event.verified = false;
    this.event.featured = false;
    this.event.winner = 0;
    this.event.brackets = [{
      name: "B1",
      pushPerMatch: false,
      pushWinner: 0,
      pushLoser: 0,
      matchesPlayed: 0,
      matches: {
        match: [
          new MatchPreview("Cloud 9", "NRG"),
          new MatchPreview("Luminosity", "100 Thieves"),
          new MatchPreview("Cloud 9", "Luminosity")
        ],
        prize: "none"
      }
    }];
  }

  addBracket() {
    this.event.brackets.push({
      name: "New Bracket",
      pushPerMatch: false,
      pushWinner: 0,
      pushLoser: 0,
      matchesPlayed: 0,
      matches: {
        match: [
          new MatchPreview("T1", "T2"),
          new MatchPreview("T3", "T4"),
          new MatchPreview("T5", "T6")
        ],
        prize: "none"
      }
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
      this.event.brackets[match].matches.match.unshift(new MatchPreview(`TMP ${i}`, `TMP ${i}`));
    }
    console.log(this.event.brackets[match].matches.match);
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
      this.event.brackets[match].matches.match.shift();
    }
    console.log(this.event.brackets[match].matches.match);
    console.log('----- Decrement End -----');
  }

  // Calculate number of rounds
   numRounds(match: number): number {
    let roundTotal = 0;
    let length = this.event.brackets[match].matches.match.length;
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
}
