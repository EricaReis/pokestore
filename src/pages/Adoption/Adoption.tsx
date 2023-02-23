import { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Navbar from "../../components/Navbar/Navbar";
import { pokemonProps } from "../../services/Pokemon/Pokemon.interfaces";
import { getAllPokemons } from "../../services/Pokemon/Pokemon";
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
