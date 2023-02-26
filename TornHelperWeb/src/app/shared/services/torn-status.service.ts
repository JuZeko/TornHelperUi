import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class TornStatusService {
  private apiUrl = 'https://localhost:7222/UserData';

  constructor(private http: HttpClient) {}

  public getUserData(): Observable<any> {
    return this.http.get<Player[]>(this.apiUrl);
  }
}
