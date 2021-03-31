import { Component, OnInit } from '@angular/core';
import { EventPreview } from '../../models/EventPreview';
import { EventManagerService } from '../event-manager.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  verifiedEvents: Array<EventPreview>;
  unverifiedEvents: Array<EventPreview>;

  private eventsSub: Subscription;

  constructor(private eventManagerService: EventManagerService, private router: Router) { }

  ngOnInit(): void {
    this.eventsSub = this.eventManagerService.getAllVerifiedEvents(1, 10).subscribe(data =>{
      this.verifiedEvents = data;
    });
  }

  ngOnDestroy():void{
    this.eventsSub.unsubscribe();
  }

  loadEvent(id: string):void{
    this.router.navigate(['/event', id]);
  }
}
