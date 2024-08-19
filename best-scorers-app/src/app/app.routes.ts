import { Routes } from '@angular/router';
import { PlayerListComponent } from './views/player-list/player-list.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [

    {
        path: '', component: PlayerListComponent,
    },
    {
        path: 'home', component: HomeComponent,
    }

];
