import { useEffect, useState } from "react";
import {
  Pokemon,
  pokemonProps,
} from "../../services/Pokemon/Pokemon.interfaces";
import { getPokemon } from "../../services/Pokemon/Pokemon";
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
      <p>{pokemonInfo?.name}</p>
      <p>
        {pokemonInfo?.abilities.map((ability) => (
          <p>{ability.ability.name}</p>
        ))}
      </p>
      <p>{pokemonInfo?.types.map((pokemon) => pokemon.type.name)}</p>
      <p>{pokemonInfo?.height}</p>
      <img src={pokemonInfo?.sprites.front_default} alt={pokemonInfo?.name} />
    </Container>
  );
}
