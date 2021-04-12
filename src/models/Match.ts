
export class Match{
    _id: string;
    event: string;
    score: Array<number>;
    teams: Array<string>; //why array of TEAMPREVIEW?
    winner: string;
    loser: string;
    winsNeeded: number;
    timePlayed: string; // should be Date but i dunno how to store
    activeGameStatus: Array<boolean>;
    mapsPlayed: Array<string>;
    gamesTime: Array<string>;
    gameScore: Array<string>;
    
    constructor(id: string){
        this._id = id;
        this.event = "Super Tourney";
        this.score = [2, 1];
        this.teams = ["CLOUD 9", "MIBR"];
        this.winner = "MIBR";
        this.loser = "CLOUD 9";
        this.winsNeeded = 2;
        this.timePlayed = '1995-12-17 03:24:00';
        this.activeGameStatus = [false, false, false, true];
        this.mapsPlayed = ["BIND", "HAVEN", "SPLIT", "ICEBOX"]
        this.gamesTime = ["3:24:00", "4:24:00", "5:24:00", "6:24:00"];
        this.gameScore = ["15-15", "16-18", "12-15", "13-16"];
    }
}
