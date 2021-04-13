import { TeamPreview } from "./TeamPreview";
import { Game } from "./Game";

export class Match{
    _id: string;
    event: string;
    score: Array<number>;
    winner: string;
    loser: string;
    winsNeeded: number;
    timePlayed: Date;
    teams: Array<TeamPreview>;
    dateCreated: Date;
    activeStatus: boolean;
    games: Array<Game>;
    
    constructor(id: string){
        this._id = id;
        this.event = "Super Tourney";
        this.score = [3, 1];
        this.winner = "MIBR";
        this.loser = "CLOUD 9";
        this.winsNeeded = 2;
        this.timePlayed = new Date();
        this.teams = [new TeamPreview("MIBR"), new TeamPreview("CLOUD 9")];
        this.dateCreated = new Date();
        this.activeStatus = true;
        this.games = [new Game("BIND"), new Game("HAVEN"), new Game("VERTIGO"), new Game("NUKE")]
    }
}
