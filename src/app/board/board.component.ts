import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares?: any[];
  xIsNext?: boolean;
  winner?: string | null;
  readonly lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void{
    this.squares = Array(9).fill(null);
    this.xIsNext = false;
    this.winner = null;
  }

  get player() {
    return this.xIsNext? 'X' : 'O';
  }

  makeMove(idx: number){
    if(!this.squares![idx]){
      this.squares!.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.checkWinner();
  }

  checkWinner(){
    for (let i = 0; i < this.lines.length; i++) {
      const [a, b, c] = this.lines[i];
      if (
        this.squares![a] &&
        this.squares![a] === this.squares![b] &&
        this.squares![a] === this.squares![c]
      ) {
        return this.squares![a];
      }
    }
    return null;
  }

}
