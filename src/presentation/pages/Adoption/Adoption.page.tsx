import CardPokemon from 'presentation/components/common/CardPokemon/CardPokemon.component';

import { useAdoption } from './useAdoption';

import { CardsContainer, Container, ContainerPokemon } from './Adoption.styles';

export default function Adoption(): JSX.Element {
  const { pokemonList } = useAdoption();

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
