import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { Container, ButtonContainer } from "./Navbar.styles";

export default function Navbar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container>
      <button type="button" onClick={() => navigate("/")}>
        Pokémon
      </button>
      <ButtonContainer>
        <Button title="Padrão" onClick={() => navigate("/example")} />
        <Button title="Com borda" outlined onClick={() => navigate("/")} />
        <Button
          title="Sem borda"
          borderless
          onClick={() => navigate("/example")}
        />
      </ButtonContainer>
    </Container>
  );
}
