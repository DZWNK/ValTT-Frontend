export class RoundStats{
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
        this.averageCombatScore = '201';
        this.kills = "2";
        this.deaths = "1";
        this.assists = "0";
        this.plusMinus = "+1";
        this.averageDamageRound = "99";
        this.headShotPercentage = "50%";
        this.firstKills = "1";
        this.firstDeaths = "0";
    }
}