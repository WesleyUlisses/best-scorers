import { Routes } from '@angular/router';
import { PlayerListComponent } from './views/player-list/player-list.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [

    {
        path: 'bestPlayers', component: PlayerListComponent,
    },
    {
        path: 'home', component: HomeComponent,
    },
    {
        //direcionar todas as tentativas de acesso a uma rota não definida para a rota home
        path: '**', redirectTo: 'home'
    }
];
