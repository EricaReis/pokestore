import { type IPersistencePokemonList } from '../pokemonService.types';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PokemonListMapper {
  static toDomain(
    persistencePokemon: IPersistencePokemonList
  ): IPersistencePokemonList {
    return {
      count: persistencePokemon.count,
      next: persistencePokemon.next,
      previous: persistencePokemon.previous,
      results: persistencePokemon.results,
    };
  }
}

export default new PokemonListMapper();
