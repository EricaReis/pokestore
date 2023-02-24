import { useEffect, useState } from "react";
import CardPokemon from "../../components/common/CardPokemon/CardPokemon";
import { getAllPokemons } from "../../../data/services/pokemon/pokemon.service";
import { pokemonProps } from "../../../data/services/pokemon/pokemonService.types";
import Navbar from "../../components/base/Navbar/Navbar";
import { Container, CardsContainer, ContainerPokemon } from "./Adoption.styles";

export default function Adoption(): JSX.Element {
  const [pokemonList, setPokemonList] = useState<pokemonProps[]>([]);

  async function getPokemons() {
    const response = await getAllPokemons();
    setPokemonList(response);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container>
      <Navbar />
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
