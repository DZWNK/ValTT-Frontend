import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  overallstats: Array<string>
  playername: string;
  constructor() { }

  ngOnInit(): void {
    this.playername = "xand";
    this.overallstats = ["22365", "257", "1329", "323", "+8123", "181236", "12%", "132", "3545"];
  }

}
