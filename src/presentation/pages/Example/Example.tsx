import Navbar from "../../components/base/Navbar/Navbar";
import { Container } from "./Example.styles";

export default function Example(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <h1>Página de exemplo</h1>
    </Container>
  );
}
