export class Team {
    teamName: string;
    players: Array<string>;
    verified: boolean;

    constructor(name: string, players: Array<string>){
        this.teamName = name;
        this.players = [players[0], players[1], players[2], players[3], players[4]];
        this.verified = true;
    }
}