export class TeamPreview{
    id: string;
    name: string;
    logo: string;
    score: number;

    constructor(name: string){
        this.name = name;
        this.logo = "MIBR.png";
        this.score = 12;
    }
}