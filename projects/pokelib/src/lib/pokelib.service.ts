import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokelibService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';
  private currentPokemon$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getPokemon(id: number) {
    return this.http
      .get(`${this.baseUrl}/pokemon/${id}`)
      .subscribe((data) => this.currentPokemon$.next(data));
  }

  getPokemonData() {
    return this.currentPokemon$.asObservable();
  }
}
