import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})



export class GameComponent implements OnInit {
  team1: Array<string>
  team2: Array<string>
  bracketname: string;
  mapname: string;
  teamgamescore: Array<string>
  gamestats0: Array<string>
  gamestats1: Array<string>
  gamestats2: Array<string>
  gamestats3: Array<string>
  gamestats4: Array<string>
  gamestats5: Array<string>
  gamestats6: Array<string>
  gamestats7: Array<string>
  gamestats8: Array<string>
  gamestats9: Array<string>
  teamsplaying: Array<string>
  constructor() { }

  ngOnInit(): void {
    this.mapname = "BIND";
    this.teamgamescore = ["15", "13"];
    this.teamsplaying = ["MIBR", "CLOUD9"];
    this.team1 = ["xand", "Quick", "Nozwerr", "Khalil", "txddy"];
    this.team2 = ["deNaro", "gaabxx", "prozin", "fra", "light"];
    this.gamestats0 = ["265", "27", "19", "3", "+8", "186", "22%", "1", "3"];
    this.gamestats1 = ["193", "20", "15", "2", "+5", "126", "25%", "0", "2"];
    this.gamestats2 = ["177", "18", "12", "7", "+6", "156", "60%", "3", "1"];
    this.gamestats3 = ["244", "12", "11", "1", "+1", "93", "21%", "4", "0"];
    this.gamestats4 = ["266", "6", "9", "0", "-3", "80", "11%", "4", "0"];
    this.gamestats5 = ["222", "11", "11", "2", "0", "33", "23%", "5", "2"];
    this.gamestats6 = ["133", "17", "7", "5", "+10", "112", "77%", "2", "4"];
    this.gamestats7 = ["111", "19", "12", "9", "+7", "71", "12%", "1", "7"];
    this.gamestats8 = ["123", "24", "13", "2", "+11", "122", "15%", "1", "1"];
    this.gamestats9 = ["256", "9", "20", "1", "-11", "100", "21%", "3", "0"];
  }


}
