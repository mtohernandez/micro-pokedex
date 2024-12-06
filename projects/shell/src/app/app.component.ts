import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokelibService } from '@pokelib';

@Component({
  selector: 'app-shell-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pokemon: any;

  constructor(private pokemonsService: PokelibService) {}

  ngOnInit(): void {
    this.pokemonsService.getPokemonData().subscribe((data: any) => {
      this.pokemon = data;
    });
  }
}
