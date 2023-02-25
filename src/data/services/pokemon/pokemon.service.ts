import api from "../api";
import {
  IPersistencePokemonList,
  IPersistencePokemonData,
  IDomainPokemonData,
} from "../pokemon/pokemonService.types";
import { PokemonDataMapper, PokemonListMapper } from "./mappers";

const limit = 8;

class PokemonService {
  async getAllPokemons(): Promise<IPersistencePokemonList> {
    const { data } = await api.get<IPersistencePokemonList>("/pokemon", {
      params: {
        limit: limit,
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
