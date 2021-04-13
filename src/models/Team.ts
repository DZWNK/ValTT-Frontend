export class Team {
    name: string;
    players: Array<string>;

    constructor(name: string, players: Array<string>){
        this.name = name;
        this.players = [players[0], players[1], players[2], players[3], players[4]];
    }
}