import { Component } from '@angular/core';
import { PokedexComponent } from '@app/components/pokedex/pokedex.component';
import { PokelibService } from '@pokelib';

@Component({
  selector: 'app-dex-root',
  imports: [PokedexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private pokemonsService: PokelibService) {}

  fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 100) + 1;
    this.pokemonsService.getPokemon(randomId);
  }
}
