import { useEffect, useState } from "react";
import { getPokemon } from "../../../../data/services/pokemon/pokemon.service";
import { Pokemon } from "../../../../data/services/pokemon/pokemonService.types";

import { CardPokemonProps } from "./CardPokemon.interfaces";
import { Container } from "./CardPokemon.styles";

export default function CardPokemon({ name }: CardPokemonProps): JSX.Element {
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>();

  async function getPokemonData() {
    const response = await getPokemon(name);
    setPokemonInfo(response);
  }

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <Container>
      <h3>{pokemonInfo?.name}</h3>
      <img src={pokemonInfo?.sprites.front_default} alt={pokemonInfo?.name} />
    </Container>
  );
}
