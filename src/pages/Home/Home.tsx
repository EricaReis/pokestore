import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getAllItems, getItem } from "../../services/Items/Items";
import { getAllPokemons, getPokemon } from "../../services/Pokemon/Pokemon";
import { Container } from "./Home.styles";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}
