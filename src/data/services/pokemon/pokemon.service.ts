import api from '../api';

import { PokemonDataMapper, PokemonListMapper } from './mappers';

import {
  type IDomainPokemonData,
  type IPersistencePokemonData,
  type IPersistencePokemonList,
} from '../pokemon/pokemonService.types';

const limit = 8;

class PokemonService {
  async getAllPokemons(): Promise<IPersistencePokemonList> {
    const { data } = await api.get<IPersistencePokemonList>('/pokemon', {
      params: {
        limit,
      },
    });

    return PokemonListMapper.toDomain(data);
  }

  async getPokemon(id: number | string): Promise<IDomainPokemonData> {
    const { data } = await api.get<IPersistencePokemonData>(`/pokemon/${id}`);

    return PokemonDataMapper.toDomain(data);
  }
}

export default new PokemonService();
