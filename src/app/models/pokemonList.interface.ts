export interface PokemonList {
  count: number;
  next: string;
  previous?: null;
  results: ResultsEntity[];
}
export interface ResultsEntity {
  name: string;
  url: string;
}
