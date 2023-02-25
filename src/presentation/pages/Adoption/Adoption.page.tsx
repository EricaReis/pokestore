import { useEffect, useState } from "react";
import CardPokemon from "../../components/common/CardPokemon/CardPokemon";
import { IPokemon } from "../../../data/services/pokemon/pokemonService.types";
import { Container, CardsContainer, ContainerPokemon } from "./Adoption.styles";
import pokemonService from "../../../data/services/pokemon/pokemon.service";

export default function Adoption(): JSX.Element {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  async function getPokemons() {
    const response = await pokemonService.getAllPokemons();
    setPokemonList(response.results);
  }

  useEffect(() => {
    getPokemons();
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
