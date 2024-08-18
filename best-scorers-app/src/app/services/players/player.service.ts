import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroment/enviroment';
import Player  from '../../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBestScorer(): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/player/getBestScorer`);
  }

  getBestAssistant(): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/player/getBestAssistant`);
  }

  getScorerList(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/player/getScorerList`);
  }

  getAssistantList(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/player/getAssistantList`);
  }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/player/getAll`);
  }

  get(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/player/get/${id}`);
  }

  create(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.apiUrl}/player/create`, player);
  }

  update(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.apiUrl}/player/update`, player);
  }

  updateGoals(id: string, goals: number): Observable<Player> {
    return this.http.put<Player>(`${this.apiUrl}/player/updateGoals/${id}`, { goals });
  }
}
