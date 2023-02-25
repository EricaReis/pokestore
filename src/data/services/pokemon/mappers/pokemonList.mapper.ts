import { IPersistencePokemonList, IPokemon } from '../pokemonService.types';

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
