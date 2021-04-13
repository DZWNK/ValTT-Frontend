import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventManagerService } from '../event-manager.service';
import { Router } from '@angular/router';
import { Event } from '../../models/Event';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: Event;

  private eventSub:Subscription;

  constructor(private eventManagerService: EventManagerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.eventSub = this.eventManagerService.getEventById(this.route.snapshot.params['id']).subscribe(data=>{
      this.event = data;
      console.log(this.event);
    });
  }

  ngOnDestroy():void{
    this.eventSub.unsubscribe();
  }

  loadMatch(id: string): void{
    this.router.navigate(['match', id]);
  }

  edit(id: string): void{
    this.router.navigate(['event/edit', id]);
  }
}
