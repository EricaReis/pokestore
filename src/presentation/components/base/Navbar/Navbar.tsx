import { useNavigate } from "react-router-dom";
import Button from "../button/DefaultButton/Button";
import { Container, ButtonContainer } from "./Navbar.styles";

export default function Navbar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container>
      <button type="button" onClick={() => navigate("/")}>
        Pokémon
      </button>
      <ButtonContainer>
        <Button title="Pokemon" onClick={() => navigate("/")} />
        <Button title="Loja" onClick={() => navigate("/example")} />
      </ButtonContainer>
    </Container>
  );
}
