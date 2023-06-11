import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemonDetail.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() item: PokemonDetail = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_types: [],
    species: { name: '', url: '' },
    sprites: {
      back_default: '',
      back_female: null,
      back_shiny: '',
      back_shiny_female: null,
      front_default: '',
      front_female: null,
      front_shiny: '',
      front_shiny_female: null,
      other: {
        dream_world: { front_default: '', front_female: null },
        home: {
          front_default: '',
          front_female: null,
          front_shiny: '',
          front_shiny_female: null,
        },
        'official-artwork': { front_default: '', front_shiny: '' },
      },
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: '',
            back_gray: '',
            back_transparent: '',
            front_default: '',
            front_gray: '',
            front_transparent: '',
          },
          yellow: {
            back_default: '',
            back_gray: '',
            back_transparent: '',
            front_default: '',
            front_gray: '',
            front_transparent: '',
          },
        },
        'generation-ii': {
          crystal: {
            back_default: '',
            back_shiny: '',
            back_shiny_transparent: '',
            back_transparent: '',
            front_default: '',
            front_shiny: '',
            front_shiny_transparent: '',
            front_transparent: '',
          },
          gold: {
            back_default: '',
            back_shiny: '',
            front_default: '',
            front_shiny: '',
            front_transparent: '',
          },
          silver: {
            back_default: '',
            back_shiny: '',
            front_default: '',
            front_shiny: '',
            front_transparent: '',
          },
        },
        'generation-iii': {
          emerald: {
            front_default: '',
            front_shiny: '',
          },
          'firered-leafgreen': {
            back_default: '',
            back_shiny: '',
            front_default: '',
            front_shiny: '',
          },
          'ruby-sapphire': {
            back_default: '',
            back_shiny: '',
            front_default: '',
            front_shiny: '',
          },
        },
        'generation-iv': {
          'diamond-pearl': {
            back_default: '',
            back_female: null,
            back_shiny: '',
            back_shiny_female: null,
            front_default: '',
            front_female: null,
            front_shiny: '',
            front_shiny_female: null,
          },
          'heartgold-soulsilver': {
            back_default: '',
            back_female: null,
            back_shiny: '',
            back_shiny_female: null,
            front_default: '',
            front_female: null,
            front_shiny: '',
            front_shiny_female: null,
          },
          platinum: {
            back_default: '',
            back_female: null,
            back_shiny: '',
            back_shiny_female: null,
            front_default: '',
            front_female: null,
            front_shiny: '',
            front_shiny_female: null,
          },
        },
        'generation-v': {
          'black-white': {
            animated: {
              back_default: '',
              back_female: null,
              back_shiny: '',
              back_shiny_female: null,
              front_default: '',
              front_female: null,
              front_shiny: '',
              front_shiny_female: null,
            },
            back_default: '',
            back_female: null,
            back_shiny: '',
            back_shiny_female: null,
            front_default: '',
            front_female: null,
            front_shiny: '',
            front_shiny_female: null,
          },
        },
        'generation-vi': {
          'omegaruby-alphasapphire': {
            front_default: '',
            front_female: null,
            front_shiny: '',
            front_shiny_female: null,
          },
          'x-y': {
            front_default: '',
            front_female: null,
            front_shiny: '',
            front_shiny_female: null,
          },
        },
        'generation-vii': {
          icons: {
            front_default: '',
            front_female: null,
          },
          'ultra-sun-ultra-moon': {
            front_default: '',
            front_female: null,
            front_shiny: '',
            front_shiny_female: null,
          },
        },
        'generation-viii': {
          icons: {
            front_default: '',
            front_female: null,
          },
        },
      },
    },
    stats: [],
    types: [],
    weight: 0,
  };

  @Input() itemData = {
    id: '',
    name: '',
    spriteUrl: '',
    officialUrl: '',
  };

  @Input() spriteUrl: string | undefined;
  @Input() pokemonName!: string;

  pokemonData = [
    {
      id: '#001',
      name: 'bulbasaur',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      id: '#002',
      name: 'ivysaur',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    },
    {
      id: '#003',
      name: 'venusaur',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    },
    {
      id: '#004',
      name: 'charmander',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    },
    {
      id: '#005',
      name: 'charmeleon',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    },
    {
      id: '#006',
      name: 'charizard',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    },
    {
      id: '#007',
      name: 'squirtle',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    },
    {
      id: '#008',
      name: 'wartortle',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
    },
    {
      id: '#009',
      name: 'blastoise',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    },
    {
      id: '#010',
      name: 'caterpie',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
    },
    {
      id: '#011',
      name: 'metapod',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
    },
    {
      id: '#012',
      name: 'butterfree',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
    },
    {
      id: '#013',
      name: 'weedle',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png',
    },
    {
      id: '#014',
      name: 'kakuna',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png',
    },
    {
      id: '#015',
      name: 'beedrill',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
    },
    {
      id: '#016',
      name: 'pidgey',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
    },
    {
      id: '#017',
      name: 'pidgeotto',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
    },
    {
      id: '#018',
      name: 'pidgeot',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
    },
    {
      id: '#019',
      name: 'rattata',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png',
    },
    {
      id: '#020',
      name: 'raticate',
      spriteUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
      officialUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png',
    },
  ];

  getSpriteUrl(pokemonName: string): string | undefined {
    const sprite = this.pokemonData.find(
      (sprite) => sprite.name === pokemonName
    );
    return sprite ? sprite.spriteUrl : undefined;
  }

  ngOnInit(): void {}
}
