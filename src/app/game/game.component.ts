import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { Stats } from "../../models/Stats";
import { Game } from "../../models/Game";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  constructor() { }

  @Input('game')
  game: Game;

@Input('selected')
selected: number;

  array: ['1','2','3a','4b','e']

  ngOnInit(): void {
  }

  setStats(){
    
  }
}
