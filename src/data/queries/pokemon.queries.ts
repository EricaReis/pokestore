import PokemonService from 'data/services/pokemon/pokemon.service';
import { type IPersistencePokemonList } from 'data/services/pokemon/pokemonService.types';

export const listAllocatedBalanceQuery = {
  key: ['allPokemons'],
  query: async (): Promise<IPersistencePokemonList> =>
    await PokemonService.getAllPokemons(),
};
