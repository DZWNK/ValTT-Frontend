import { PlayerPreview } from "./PlayerPreview";

export class GameTeam{
teamName: string;
players: Array<PlayerPreview>

    constructor(i: string){
        this.teamName = i;
        this.players = [new PlayerPreview("xand"), new PlayerPreview("Quick"), new PlayerPreview("Nozwerr"),
        new PlayerPreview("Khalil"),new PlayerPreview("txddy")];
    }
};