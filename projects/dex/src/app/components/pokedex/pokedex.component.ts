import { Component, OnInit } from '@angular/core';
import { PokelibService } from '@pokelib';

@Component({
  selector: 'app-dex-pokedex',
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent implements OnInit {
  pokemon: any;

  constructor(private pokemonsService: PokelibService) {}

  ngOnInit(): void {
    this.pokemonsService.getPokemonData().subscribe((data: any) => {
      this.pokemon = data;
    });
  }
}
