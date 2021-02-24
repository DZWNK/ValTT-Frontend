import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { EventManagerService } from '../event-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Array<Event>;

  private eventsSub: Subscription;

  constructor(private eventManagerService: EventManagerService) { }

  ngOnInit(): void {
    this.eventsSub = this.eventManagerService.getAllEvents(1, 10).subscribe(data =>{
      this.events = data;
    });
  }

  ngOnDestroy():void{
    this.eventsSub.unsubscribe();
  }
}
