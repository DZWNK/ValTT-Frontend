import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { Stats } from "../../models/Stats";
import { Game } from "../../models/Game";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  constructor() { }

  @Input('game')
  game: Game;

@Input('selected')
selected: number;

  array: ['1','2','3a','4b','e']

  ngOnInit(): void {



  }

  setStats(i: number){
    this.selected = i;
    this.game.rounds[0].teams[0].players[0].averageCombatScore = "75";
    this.game.rounds[0].teams[0].players[0].kills = "1";
    this.game.rounds[0].teams[0].players[0].deaths = "1";
    this.game.rounds[0].teams[0].players[0].assists = "1";
    this.game.rounds[0].teams[0].players[0].plusMinus = "0";
    this.game.rounds[0].teams[0].players[0].averageDamageRound = "80";
    this.game.rounds[0].teams[0].players[0].headShotPercentage = "100%";
    this.game.rounds[0].teams[0].players[0].firstKills = "1";
    this.game.rounds[0].teams[0].players[0].firstDeaths = "0";

    this.game.rounds[1].teams[0].players[1].averageCombatScore = "75";
    this.game.rounds[1].teams[0].players[1].kills = "1";
    this.game.rounds[1].teams[0].players[1].deaths = "1";
    this.game.rounds[1].teams[0].players[1].assists = "1";
    this.game.rounds[1].teams[0].players[1].plusMinus = "0";
    this.game.rounds[1].teams[0].players[1].averageDamageRound = "80";
    this.game.rounds[1].teams[0].players[1].headShotPercentage = "100%";
    this.game.rounds[1].teams[0].players[1].firstKills = "1";
    this.game.rounds[1].teams[0].players[1].firstDeaths = "0";

    this.game.rounds[1].teams[0].players[2].averageCombatScore = "75";
    this.game.rounds[1].teams[0].players[2].kills = "1";
    this.game.rounds[1].teams[0].players[2].deaths = "1";
    this.game.rounds[1].teams[0].players[2].assists = "1";
    this.game.rounds[1].teams[0].players[2].plusMinus = "0";
    this.game.rounds[1].teams[0].players[2].averageDamageRound = "80";
    this.game.rounds[1].teams[0].players[2].headShotPercentage = "100%";
    this.game.rounds[1].teams[0].players[2].firstKills = "1";
    this.game.rounds[1].teams[0].players[2].firstDeaths = "0";

    this.game.rounds[1].teams[0].players[3].averageCombatScore = "75";
    this.game.rounds[1].teams[0].players[3].kills = "1";
    this.game.rounds[1].teams[0].players[3].deaths = "1";
    this.game.rounds[1].teams[0].players[3].assists = "1";
    this.game.rounds[1].teams[0].players[3].plusMinus = "0";
    this.game.rounds[1].teams[0].players[3].averageDamageRound = "80";
    this.game.rounds[1].teams[0].players[3].headShotPercentage = "100%";
    this.game.rounds[1].teams[0].players[3].firstKills = "1";
    this.game.rounds[1].teams[0].players[3].firstDeaths = "0";

    this.game.rounds[1].teams[0].players[4].averageCombatScore = "75";
    this.game.rounds[1].teams[0].players[4].kills = "1";
    this.game.rounds[1].teams[0].players[4].deaths = "1";
    this.game.rounds[1].teams[0].players[4].assists = "1";
    this.game.rounds[1].teams[0].players[4].plusMinus = "0";
    this.game.rounds[1].teams[0].players[4].averageDamageRound = "80";
    this.game.rounds[1].teams[0].players[4].headShotPercentage = "100%";
    this.game.rounds[1].teams[0].players[4].firstKills = "1";
    this.game.rounds[1].teams[0].players[4].firstDeaths = "0";


    this.game.rounds[1].teams[1].players[0].averageCombatScore = "75";
    this.game.rounds[1].teams[1].players[0].kills = "1";
    this.game.rounds[1].teams[1].players[0].deaths = "1";
    this.game.rounds[1].teams[1].players[0].assists = "1";
    this.game.rounds[1].teams[1].players[0].plusMinus = "0";
    this.game.rounds[1].teams[1].players[0].averageDamageRound = "80";
    this.game.rounds[1].teams[1].players[0].headShotPercentage = "100%";
    this.game.rounds[1].teams[1].players[0].firstKills = "1";
    this.game.rounds[1].teams[1].players[0].firstDeaths = "0";

    this.game.rounds[1].teams[1].players[1].averageCombatScore = "75";
    this.game.rounds[1].teams[1].players[1].kills = "1";
    this.game.rounds[1].teams[1].players[1].deaths = "1";
    this.game.rounds[1].teams[1].players[1].assists = "1";
    this.game.rounds[1].teams[1].players[1].plusMinus = "0";
    this.game.rounds[1].teams[1].players[1].averageDamageRound = "80";
    this.game.rounds[1].teams[1].players[1].headShotPercentage = "100%";
    this.game.rounds[1].teams[1].players[1].firstKills = "1";
    this.game.rounds[1].teams[1].players[1].firstDeaths = "0";

    this.game.rounds[1].teams[1].players[2].averageCombatScore = "75";
    this.game.rounds[1].teams[1].players[2].kills = "1";
    this.game.rounds[1].teams[1].players[2].deaths = "1";
    this.game.rounds[1].teams[1].players[2].assists = "1";
    this.game.rounds[1].teams[1].players[2].plusMinus = "0";
    this.game.rounds[1].teams[1].players[2].averageDamageRound = "80";
    this.game.rounds[1].teams[1].players[2].headShotPercentage = "100%";
    this.game.rounds[1].teams[1].players[2].firstKills = "1";
    this.game.rounds[1].teams[1].players[2].firstDeaths = "0";

    this.game.rounds[1].teams[1].players[3].averageCombatScore = "75";
    this.game.rounds[1].teams[1].players[3].kills = "1";
    this.game.rounds[1].teams[1].players[3].deaths = "1";
    this.game.rounds[1].teams[1].players[3].assists = "1";
    this.game.rounds[1].teams[1].players[3].plusMinus = "0";
    this.game.rounds[1].teams[1].players[3].averageDamageRound = "80";
    this.game.rounds[1].teams[1].players[3].headShotPercentage = "100%";
    this.game.rounds[1].teams[1].players[3].firstKills = "1";
    this.game.rounds[1].teams[1].players[3].firstDeaths = "0";

    this.game.rounds[1].teams[1].players[4].averageCombatScore = "75";
    this.game.rounds[1].teams[1].players[4].kills = "1";
    this.game.rounds[1].teams[1].players[4].deaths = "1";
    this.game.rounds[1].teams[1].players[4].assists = "1";
    this.game.rounds[1].teams[1].players[4].plusMinus = "0";
    this.game.rounds[1].teams[1].players[4].averageDamageRound = "80";
    this.game.rounds[1].teams[1].players[4].headShotPercentage = "100%";
    this.game.rounds[1].teams[1].players[4].firstKills = "1";
    this.game.rounds[1].teams[1].players[4].firstDeaths = "0";


    this.game.rounds[2].teams[1].players[0].averageCombatScore = "75";
    this.game.rounds[2].teams[1].players[0].kills = "1";
    this.game.rounds[2].teams[1].players[0].deaths = "1";
    this.game.rounds[2].teams[1].players[0].assists = "1";
    this.game.rounds[2].teams[1].players[0].plusMinus = "0";
    this.game.rounds[2].teams[1].players[0].averageDamageRound = "80";
    this.game.rounds[2].teams[1].players[0].headShotPercentage = "100%";
    this.game.rounds[2].teams[1].players[0].firstKills = "1";
    this.game.rounds[2].teams[1].players[0].firstDeaths = "0";

    this.game.rounds[2].teams[1].players[1].averageCombatScore = "75";
    this.game.rounds[2].teams[1].players[1].kills = "1";
    this.game.rounds[2].teams[1].players[1].deaths = "1";
    this.game.rounds[2].teams[1].players[1].assists = "1";
    this.game.rounds[2].teams[1].players[1].plusMinus = "0";
    this.game.rounds[2].teams[1].players[1].averageDamageRound = "80";
    this.game.rounds[2].teams[1].players[1].headShotPercentage = "100%";
    this.game.rounds[2].teams[1].players[1].firstKills = "1";
    this.game.rounds[2].teams[1].players[1].firstDeaths = "0";

    this.game.rounds[2].teams[1].players[2].averageCombatScore = "75";
    this.game.rounds[2].teams[1].players[2].kills = "1";
    this.game.rounds[2].teams[1].players[2].deaths = "1";
    this.game.rounds[2].teams[1].players[2].assists = "1";
    this.game.rounds[2].teams[1].players[2].plusMinus = "0";
    this.game.rounds[2].teams[1].players[2].averageDamageRound = "80";
    this.game.rounds[2].teams[1].players[2].headShotPercentage = "100%";
    this.game.rounds[2].teams[1].players[2].firstKills = "1";
    this.game.rounds[2].teams[1].players[2].firstDeaths = "0";

    this.game.rounds[2].teams[1].players[3].averageCombatScore = "75";
    this.game.rounds[2].teams[1].players[3].kills = "1";
    this.game.rounds[2].teams[1].players[3].deaths = "1";
    this.game.rounds[2].teams[1].players[3].assists = "1";
    this.game.rounds[2].teams[1].players[3].plusMinus = "0";
    this.game.rounds[2].teams[1].players[3].averageDamageRound = "80";
    this.game.rounds[2].teams[1].players[3].headShotPercentage = "100%";
    this.game.rounds[2].teams[1].players[3].firstKills = "1";
    this.game.rounds[2].teams[1].players[3].firstDeaths = "0";

    this.game.rounds[2].teams[1].players[4].averageCombatScore = "75";
    this.game.rounds[2].teams[1].players[4].kills = "1";
    this.game.rounds[2].teams[1].players[4].deaths = "1";
    this.game.rounds[2].teams[1].players[4].assists = "1";
    this.game.rounds[2].teams[1].players[4].plusMinus = "0";
    this.game.rounds[2].teams[1].players[4].averageDamageRound = "80";
    this.game.rounds[2].teams[1].players[4].headShotPercentage = "100%";
    this.game.rounds[2].teams[1].players[4].firstKills = "1";
    this.game.rounds[2].teams[1].players[4].firstDeaths = "0";

  }
}
