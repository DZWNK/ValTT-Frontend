import { GameTeam } from "./GameTeam";

export class Round{
    winner: string;
    loser: string;
    winType: string;
    planter: string;
    defuser: string;
    plantSite: string;
    plantTime: string;
    defuseTime: string;
    teams: Array<GameTeam>;

    constructor(i: string){
        this.winner = i;
        this.loser = "MIBR";
        this.winType = "DEFUSE";
        this.planter = "Stewie2k";
        this.defuser = "Elige";
        this.plantSite = "B";
        this.plantTime = "1:22";
        this.defuseTime = "0:04";
        this.teams = [new GameTeam("MIBR"), new GameTeam("CLOUD 9")]
    }
}