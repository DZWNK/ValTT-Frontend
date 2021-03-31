import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventManagerService } from '../event-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  id: string;

  constructor(private eventManagerService: EventManagerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  loadMatch(id: string): void{
    this.router.navigate(['match', id]);
  }

}
