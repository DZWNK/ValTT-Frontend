import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  team1: Array<string>
  team2: Array<string>
  mapsplayed;
  mapsinmatch: Array<string>
  bracketname: string;
  tournamentname: string;
  teammatchscore: Array<string>
  matchstats0: Array<string>
  matchstats1: Array<string>
  matchstats2: Array<string>
  matchstats3: Array<string>
  matchstats4: Array<string>
  matchstats5: Array<string>
  matchstats6: Array<string>
  matchstats7: Array<string>
  matchstats8: Array<string>
  matchstats9: Array<string>
  teamsplaying: Array<string>
  constructor() { }

  ngOnInit(): void {
    this.mapsplayed = 4;
    this.mapsinmatch = ["BIND", "HAVEN", "SPLIT", "ICEBOX"]
    this.tournamentname = "SUPER TOURNEY";
    this.bracketname = "SEMI FINAL";
    this.teammatchscore = ["1", "3"];
    this.teamsplaying = ["MIBR", "CLOUD9"];
    this.team1 = ["xand", "Quick", "Nozwerr", "Khalil", "txddy"];
    this.team2 = ["deNaro", "gaabxx", "prozin", "fra", "light"];
    this.matchstats0 = ["265", "27", "19", "3", "+8", "186", "22%", "1", "3"];
    this.matchstats1 = ["193", "20", "15", "2", "+5", "126", "25%", "0", "2"];
    this.matchstats2 = ["177", "18", "12", "7", "+6", "156", "60%", "3", "1"];
    this.matchstats3 = ["244", "12", "11", "1", "+1", "93", "21%", "4", "0"];
    this.matchstats4 = ["266", "6", "9", "0", "-3", "80", "11%", "4", "0"];
    this.matchstats5 = ["222", "11", "11", "2", "0", "33", "23%", "5", "2"];
    this.matchstats6 = ["133", "17", "7", "5", "+10", "112", "77%", "2", "4"];
    this.matchstats7 = ["111", "19", "12", "9", "+7", "71", "12%", "1", "7"];
    this.matchstats8 = ["123", "24", "13", "2", "+11", "122", "15%", "1", "1"];
    this.matchstats9 = ["256", "9", "20", "1", "-11", "100", "21%", "3", "0"];
  }
}
