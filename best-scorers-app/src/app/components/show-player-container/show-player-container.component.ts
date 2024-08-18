import { Component, Input, OnInit  } from '@angular/core';
import Player from '../../interfaces/player.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-player-container',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './show-player-container.component.html',
  styleUrl: './show-player-container.component.css'
})
export class ShowPlayerContainerComponent {

  @Input() player: Player = {};
  
  @Input() position: string = '';
  isHovered = false;
  constructor() { }

  ngOnInit(): void {

  }

}
