import { PlayerPreview } from "./PlayerPreview";
import { Stats } from "./Stats";

export class GameTeam{
teamName: string;
players: Array<Stats>

    constructor(i: string){
        this.teamName = i;
        this.players = [new Stats("xand"), new Stats("Quick"), new Stats("Nozwerr"),
        new Stats("Khalil"),new Stats("txddy")];
    }
};