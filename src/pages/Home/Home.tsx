import Navbar from "../../components/Navbar/Navbar";
import { Container } from "./Home.styles";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <h1>Página Inicial</h1>
    </Container>
  );
}
