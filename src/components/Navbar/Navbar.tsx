import Button from "../Button/Button";
import { Container } from "./Navbar.styles";

export default function Navbar(): JSX.Element {
  return (
    <Container>
      <button type="button">Pokemon</button>
      <div>
        <Button />
        <button type="button">Pokemon</button>
      </div>
    </Container>
  );
}
