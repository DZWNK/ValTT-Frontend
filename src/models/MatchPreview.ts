import { TeamPreview } from "./TeamPreview";

export class MatchPreview{
    match: {
        id: string;
        teams: Array<TeamPreview>;
        score: Array<number>;
        winner: number;
        loser: number;
        activeStatus: boolean;
        timePlayed: Date;
        winsNeeded: number;
    };
    prize: string;

    constructor(Name1: string, Name2: string){
        this.match = {
            id: `Match[${Name1}]`,
            teams: [new TeamPreview(Name1), new TeamPreview(Name2)],
            score: [0,0],
            winner: 0,
            loser: 1,
            activeStatus: false,
            timePlayed: new Date(),
            winsNeeded: 1
        };
    }
}
