import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from 'src/app/models/pokemonDetail.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon!: PokemonDetail;
  showDetails!: boolean;

  constructor(
    private pokemonsServices: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    this.showDetails = false;

    if (identifier !== null) {
      this.pokemonsServices.getPokemonById(identifier).subscribe((pokemon) => {
        if (!pokemon) {
          return this.router.navigateByUrl('/');
        }

        this.pokemon = pokemon;
        return pokemon;
      });
    }
  }

  getFormattedTypes(types: any[]): string {
    return types
      .map(
        (type) =>
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
      )
      .join(', ');
  }
}
