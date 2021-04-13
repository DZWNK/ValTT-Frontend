import { Round } from "./Round";

export class Game{
    score: Array<Number>;
    mapName: string;
    status: boolean;
    time: Date;
    rounds: Array<Round>
    
    constructor(i: string){
    this.score = [13, 9];
    this.mapName = i;
    this.status = true;
    this.time = new Date();
    this.rounds = [new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),
    new Round("CLOUD 9"),]
    }
}