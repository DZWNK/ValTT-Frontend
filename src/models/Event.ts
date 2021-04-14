import { Team } from "./Team";
import { Bracket } from "./Bracket";

export class Event{
    _id: string;
    name: string;
    runningStatus: boolean;
    dateCreated: Date;
    startDate: Date;
    endDate: Date;
    watchLink: string;
    verified: boolean;
    featured: boolean;
    winner: number;
    teams: Array<Team>;
    brackets: Array<Bracket>;

    constructor(){
        this._id = undefined;
        this.name = '';
        this.runningStatus = true;
        this.dateCreated = new Date();
        this.startDate = new Date();
        this.endDate = new Date();
        this.watchLink = '';
        this.verified = true;
        this.featured = false;
        this.winner = 0;
        this.teams = new Array(0);
        this.brackets = new Array(0);
    }
}
