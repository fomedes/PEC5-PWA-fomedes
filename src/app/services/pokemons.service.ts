import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemonDetail.interface';
import { PokemonList } from '../models/pokemonList.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<PokemonList> {
    return this.http.get<PokemonList>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonById(id: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(
      'https://pokeapi.co/api/v2/pokemon/' + id
    );
  }
}
