import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPlayerContainerComponent } from '../../components/show-player-container/show-player-container.component';
import { PlayerService } from '../../services/players/player.service';
import Player from '../../interfaces/player.interface';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [
    CommonModule,
    ShowPlayerContainerComponent
  ],
  providers: [PlayerService],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent {

  players: Player[] = [];
  bestScorerList: Player[] = [];
  bestScorer: Player = {};
  bestAssistant: Player = {};
  constructor(private playerService: PlayerService) { }

  async ngOnInit(): Promise<void> {
    this.playerService.getBestScorer().subscribe(player => this.bestScorer = player);
    this.playerService.getBestAssistant().subscribe(player => this.bestAssistant = player);
    this.playerService.getAll().subscribe((bestScorerList: Player[]) => {

      this.bestScorerList = bestScorerList.sort((a, b) => {

        if (a?.goals === undefined || b?.goals === undefined) {
          return 0;
        }

        if (a?.goals < a?.goals) {
          return 1;
        }
        if (a?.goals > b?.goals) {
          return -1;
        }
        return 0;
      })

      for (let i = 0; i < this.bestScorerList.length; i++) {
        this.bestScorerList[i].hankNumber = i + 1;
      }

    }
    );
  }

  async insertHankNumber(player: Player, number: number | string): Promise<void> {

    player.hankNumber = number;

  }

}
