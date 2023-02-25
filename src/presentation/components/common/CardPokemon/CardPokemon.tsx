import { useCallback, useEffect, useState } from 'react';

import pokemonService from 'data/services/pokemon/pokemon.service';
import { type IDomainPokemonData } from 'data/services/pokemon/pokemonService.types';

import { type ICardPokemonProps } from './CardPokemon.interfaces';

import { Container } from './CardPokemon.styles';

export default function CardPokemon({ name }: ICardPokemonProps): JSX.Element {
  const [pokemonInfo, setPokemonInfo] = useState<IDomainPokemonData>();

  const getPokemonData = useCallback(async () => {
    const response = await pokemonService.getPokemon(name);
    setPokemonInfo(response);
  }, [name]);

  useEffect(() => {
    void getPokemonData();
  }, [getPokemonData]);

  return (
    <Container>
      <h3>{pokemonInfo?.name}</h3>
      <img src={pokemonInfo?.sprites.front_default} alt={pokemonInfo?.name} />
    </Container>
  );
}
