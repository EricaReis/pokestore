import { useEffect, useState } from 'react';

import pokemonService from 'data/services/pokemon/pokemon.service';
import { type IPokemon } from 'data/services/pokemon/pokemonService.types';

import { type IUseAdoption } from './Adoption.types';

export function useAdoption(): IUseAdoption {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  async function getPokemons(): Promise<void> {
    const response = await pokemonService.getAllPokemons();
    setPokemonList(response.results);
  }

  useEffect(() => {
    void getPokemons();
  }, []);

  return { pokemonList };
}
