import { Player } from './Player'

export class Team {
    _id: string;
    teamName: string;
    currentRoster: Array<Player>;
    verified: boolean;

    constructor(name: string, players: Array<string>){
        this._id = undefined; 
        this.teamName = name;
        this.currentRoster = [
            new Player(players[0]), new Player (players[1]), new Player(players[2]), new Player(players[3]), new Player (players[4])
        ];
        this.verified = true;
    }
}
