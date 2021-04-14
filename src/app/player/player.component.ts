import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from 'src/models/Player';
import { PlayerManagerService } from '../player-manager.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Player;

  playerSub: Subscription;


  overallstats: Array<string>
  playername: string;

  constructor(private playerManagerService: PlayerManagerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.playerSub = this.playerManagerService.getPlayerById(this.route.snapshot.params['id']).subscribe(data=>{
    //   this.player = data;
    // });

    // this.playername = "xand";
    // this.overallstats = ["22365", "257", "1329", "323", "+8123", "181236", "12%", "132", "3545"];
  }

  ngOnDestroy(){
    // this.playerSub.unsubscribe();
  }

}
