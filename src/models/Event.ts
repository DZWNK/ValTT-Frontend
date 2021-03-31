import { ObjectUnsubscribedError } from "rxjs";
import { EventPreview } from "./EventPreview";
import { Team } from "./Team";
import { Bracket } from "./Bracket";

export class Event{
    id: string;
    name: string;
    runningStatus: boolean;
    dateCreated: Date;
    startDate: Date;
    endDate: Date;
    watchLink: string;
    verified: boolean;
    featured: boolean;
    winner: number;
    teams: Array<Team>;
    brackets: Array<Bracket>;
}
