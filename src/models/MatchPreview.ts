import { TeamPreview } from "./TeamPreview";

export class MatchPreview{
    id: string;
    team: Array<TeamPreview>;
    winner: TeamPreview;

    constructor(Name1: string, Name2: string){
        this.id = `Match[${Name1}]`;
        this.team = [new TeamPreview(), new TeamPreview()];
        this.team[0].name =  Name1;
        this.team[1].name = Name2;
    }
}
