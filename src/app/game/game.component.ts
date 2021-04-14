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

  roundSelect: number;

  array: ['1','2','3a','4b','e']

  ngOnInit(): void {
    this.roundSelect = 0;
  }

  setStats(i: number){
    this.roundSelect = i;
    this.game.rounds[0].teams[0].players[0].averageCombatScore = "75";
    this.game.rounds[0].teams[0].players[0].kills = "1";
    this.game.rounds[0].teams[0].players[0].deaths = "1";
    this.game.rounds[0].teams[0].players[0].assists = "1";
    this.game.rounds[0].teams[0].players[0].plusMinus = "0";
    this.game.rounds[0].teams[0].players[0].averageDamageRound = "80";
    this.game.rounds[0].teams[0].players[0].headShotPercentage = "100%";
    this.game.rounds[0].teams[0].players[0].firstKills = "1";
    this.game.rounds[0].teams[0].players[0].firstDeaths = "0";

    this.game.rounds[1].teams[0].players[1].averageCombatScore = "100";
    this.game.rounds[1].teams[0].players[1].kills = "0";
    this.game.rounds[1].teams[0].players[1].deaths = "5";
    this.game.rounds[1].teams[0].players[1].assists = "2";
    this.game.rounds[1].teams[0].players[1].plusMinus = "1";
    this.game.rounds[1].teams[0].players[1].averageDamageRound = "82";
    this.game.rounds[1].teams[0].players[1].headShotPercentage = "82%";
    this.game.rounds[1].teams[0].players[1].firstKills = "0";
    this.game.rounds[1].teams[0].players[1].firstDeaths = "2";

    this.game.rounds[1].teams[0].players[2].averageCombatScore = "62";
    this.game.rounds[1].teams[0].players[2].kills = "4";
    this.game.rounds[1].teams[0].players[2].deaths = "1";
    this.game.rounds[1].teams[0].players[2].assists = "2";
    this.game.rounds[1].teams[0].players[2].plusMinus = "2";
    this.game.rounds[1].teams[0].players[2].averageDamageRound = "77";
    this.game.rounds[1].teams[0].players[2].headShotPercentage = "60%";
    this.game.rounds[1].teams[0].players[2].firstKills = "0";
    this.game.rounds[1].teams[0].players[2].firstDeaths = "1";

    this.game.rounds[1].teams[0].players[3].averageCombatScore = "85";
    this.game.rounds[1].teams[0].players[3].kills = "0";
    this.game.rounds[1].teams[0].players[3].deaths = "5";
    this.game.rounds[1].teams[0].players[3].assists = "2";
    this.game.rounds[1].teams[0].players[3].plusMinus = "1";
    this.game.rounds[1].teams[0].players[3].averageDamageRound = "20";
    this.game.rounds[1].teams[0].players[3].headShotPercentage = "20%";
    this.game.rounds[1].teams[0].players[3].firstKills = "0";
    this.game.rounds[1].teams[0].players[3].firstDeaths = "4";

    this.game.rounds[1].teams[0].players[4].averageCombatScore = "75";
    this.game.rounds[1].teams[0].players[4].kills = "0";
    this.game.rounds[1].teams[0].players[4].deaths = "2";
    this.game.rounds[1].teams[0].players[4].assists = "3";
    this.game.rounds[1].teams[0].players[4].plusMinus = "1";
    this.game.rounds[1].teams[0].players[4].averageDamageRound = "182";
    this.game.rounds[1].teams[0].players[4].headShotPercentage = "99%";
    this.game.rounds[1].teams[0].players[4].firstKills = "0";
    this.game.rounds[1].teams[0].players[4].firstDeaths = "0";


    this.game.rounds[1].teams[1].players[0].averageCombatScore = "7500";
    this.game.rounds[1].teams[1].players[0].kills = "0";
    this.game.rounds[1].teams[1].players[0].deaths = "5";
    this.game.rounds[1].teams[1].players[0].assists = "1";
    this.game.rounds[1].teams[1].players[0].plusMinus = "1";
    this.game.rounds[1].teams[1].players[0].averageDamageRound = "2";
    this.game.rounds[1].teams[1].players[0].headShotPercentage = "100%";
    this.game.rounds[1].teams[1].players[0].firstKills = "0";
    this.game.rounds[1].teams[1].players[0].firstDeaths = "0";

    this.game.rounds[1].teams[1].players[1].averageCombatScore = "25";
    this.game.rounds[1].teams[1].players[1].kills = "3";
    this.game.rounds[1].teams[1].players[1].deaths = "4";
    this.game.rounds[1].teams[1].players[1].assists = "5";
    this.game.rounds[1].teams[1].players[1].plusMinus = "6";
    this.game.rounds[1].teams[1].players[1].averageDamageRound = "7";
    this.game.rounds[1].teams[1].players[1].headShotPercentage = "8%";
    this.game.rounds[1].teams[1].players[1].firstKills = "9";
    this.game.rounds[1].teams[1].players[1].firstDeaths = "10";

    this.game.rounds[1].teams[1].players[2].averageCombatScore = "142";
    this.game.rounds[1].teams[1].players[2].kills = "2";
    this.game.rounds[1].teams[1].players[2].deaths = "3";
    this.game.rounds[1].teams[1].players[2].assists = "1";
    this.game.rounds[1].teams[1].players[2].plusMinus = "5";
    this.game.rounds[1].teams[1].players[2].averageDamageRound = "10";
    this.game.rounds[1].teams[1].players[2].headShotPercentage = "100%";
    this.game.rounds[1].teams[1].players[2].firstKills = "12";
    this.game.rounds[1].teams[1].players[2].firstDeaths = "0";

    this.game.rounds[1].teams[1].players[3].averageCombatScore = "56";
    this.game.rounds[1].teams[1].players[3].kills = "6";
    this.game.rounds[1].teams[1].players[3].deaths = "6";
    this.game.rounds[1].teams[1].players[3].assists = "6";
    this.game.rounds[1].teams[1].players[3].plusMinus = "2";
    this.game.rounds[1].teams[1].players[3].averageDamageRound = "86";
    this.game.rounds[1].teams[1].players[3].headShotPercentage = "62%";
    this.game.rounds[1].teams[1].players[3].firstKills = "2";
    this.game.rounds[1].teams[1].players[3].firstDeaths = "1";

    this.game.rounds[1].teams[1].players[4].averageCombatScore = "425";
    this.game.rounds[1].teams[1].players[4].kills = "1";
    this.game.rounds[1].teams[1].players[4].deaths = "1";
    this.game.rounds[1].teams[1].players[4].assists = "1";
    this.game.rounds[1].teams[1].players[4].plusMinus = "0";
    this.game.rounds[1].teams[1].players[4].averageDamageRound = "80";
    this.game.rounds[1].teams[1].players[4].headShotPercentage = "100%";
    this.game.rounds[1].teams[1].players[4].firstKills = "1";
    this.game.rounds[1].teams[1].players[4].firstDeaths = "0";


    this.game.rounds[2].teams[1].players[0].averageCombatScore = "25";
    this.game.rounds[2].teams[1].players[0].kills = "12";
    this.game.rounds[2].teams[1].players[0].deaths = "21";
    this.game.rounds[2].teams[1].players[0].assists = "5";
    this.game.rounds[2].teams[1].players[0].plusMinus = "2";
    this.game.rounds[2].teams[1].players[0].averageDamageRound = "20";
    this.game.rounds[2].teams[1].players[0].headShotPercentage = "62%";
    this.game.rounds[2].teams[1].players[0].firstKills = "2";
    this.game.rounds[2].teams[1].players[0].firstDeaths = "0";

    this.game.rounds[2].teams[1].players[1].averageCombatScore = "251";
    this.game.rounds[2].teams[1].players[1].kills = "1";
    this.game.rounds[2].teams[1].players[1].deaths = "1";
    this.game.rounds[2].teams[1].players[1].assists = "1";
    this.game.rounds[2].teams[1].players[1].plusMinus = "0";
    this.game.rounds[2].teams[1].players[1].averageDamageRound = "80";
    this.game.rounds[2].teams[1].players[1].headShotPercentage = "20%";
    this.game.rounds[2].teams[1].players[1].firstKills = "1";
    this.game.rounds[2].teams[1].players[1].firstDeaths = "2";

    this.game.rounds[2].teams[1].players[2].averageCombatScore = "25";
    this.game.rounds[2].teams[1].players[2].kills = "6";
    this.game.rounds[2].teams[1].players[2].deaths = "6";
    this.game.rounds[2].teams[1].players[2].assists = "4";
    this.game.rounds[2].teams[1].players[2].plusMinus = "4";
    this.game.rounds[2].teams[1].players[2].averageDamageRound = "400";
    this.game.rounds[2].teams[1].players[2].headShotPercentage = "40%";
    this.game.rounds[2].teams[1].players[2].firstKills = "1";
    this.game.rounds[2].teams[1].players[2].firstDeaths = "0";

    this.game.rounds[2].teams[1].players[3].averageCombatScore = "752";
    this.game.rounds[2].teams[1].players[3].kills = "1";
    this.game.rounds[2].teams[1].players[3].deaths = "21";
    this.game.rounds[2].teams[1].players[3].assists = "1";
    this.game.rounds[2].teams[1].players[3].plusMinus = "30";
    this.game.rounds[2].teams[1].players[3].averageDamageRound = "80";
    this.game.rounds[2].teams[1].players[3].headShotPercentage = "108%";
    this.game.rounds[2].teams[1].players[3].firstKills = "1";
    this.game.rounds[2].teams[1].players[3].firstDeaths = "2";

    this.game.rounds[2].teams[1].players[4].averageCombatScore = "27";
    this.game.rounds[2].teams[1].players[4].kills = "1";
    this.game.rounds[2].teams[1].players[4].deaths = "21";
    this.game.rounds[2].teams[1].players[4].assists = "1";
    this.game.rounds[2].teams[1].players[4].plusMinus = "01";
    this.game.rounds[2].teams[1].players[4].averageDamageRound = "80";
    this.game.rounds[2].teams[1].players[4].headShotPercentage = "100%";
    this.game.rounds[2].teams[1].players[4].firstKills = "12";
    this.game.rounds[2].teams[1].players[4].firstDeaths = "0";
  }

  viewTeam(id: string){
    console.log(`TEAM SELECTED ------- ${id}`)
  }
}
