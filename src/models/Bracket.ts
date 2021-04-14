import { MatchPreview } from "./MatchPreview";

export class Bracket{
    name: string;
    pushPerMatch: boolean;
    pushWinner: number;
    pushLoser: number;
    matchesPlayed: number;
    matches: Array<MatchPreview>;
}
