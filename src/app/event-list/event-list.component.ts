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

  private verifiedEventsSub: Subscription;
  private unverifiedEventsSub: Subscription;

  constructor(private eventManagerService: EventManagerService, private router: Router) { }

  ngOnInit(): void {
    this.verifiedEventsSub = this.eventManagerService.getAllVerifiedEvents(1, 50).subscribe(data =>{
      this.verifiedEvents = data;
    });
    this.unverifiedEventsSub = this.eventManagerService.getAllUnverifiedEvents(1, 50).subscribe(data=>{
      this.unverifiedEvents = data;
    });
  }

  ngOnDestroy():void{
    this.verifiedEventsSub.unsubscribe();
    this.unverifiedEventsSub.unsubscribe();
  }

  loadEvent(id: string):void{
    this.router.navigate(['/event', id]);
  }


}
