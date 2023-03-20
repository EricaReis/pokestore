import { useEffect, useState } from 'react';

import pokemonService from 'data/services/pokemon/pokemon.service';
import { type IPokemon } from 'data/services/pokemon/pokemonService.types';

import CardPokemon from 'presentation/components/global/CardPokemon/CardPokemon.component';

import { CardsContainer, Container, ContainerPokemon } from './Adoption.styles';

export default function Adoption(): JSX.Element {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  async function getPokemons(): Promise<void> {
    const response = await pokemonService.getAllPokemons();
    setPokemonList(response.results);
  }

  useEffect(() => {
    void getPokemons();
  }, []);

  return (
    <Container>
      <h1>Adote um pokemon!</h1>
      <ContainerPokemon>
        {pokemonList?.map((pokemon) => (
          <CardsContainer key={pokemon.name}>
            <CardPokemon name={pokemon.name} />
          </CardsContainer>
        ))}
      </ContainerPokemon>
    </Container>
  );
}
