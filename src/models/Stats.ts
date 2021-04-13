export class Stats{
    player: string;
    averageCombatScore: string;
    kills: string;
    deaths: string;
    assists: string;
    plusMinus: string;
    averageDamageRound: string;
    headShotPercentage: string;
    firstKills: string;
    firstDeaths: string;

    constructor(name: string){
        this.player = name;
        this.averageCombatScore = '247';
        this.kills = "27";
        this.deaths = "19";
        this.assists = "3";
        this.plusMinus = "+8";
        this.averageDamageRound = "186";
        this.headShotPercentage = "22%";
        this.firstKills = "1";
        this.firstDeaths = "3";
    }
}