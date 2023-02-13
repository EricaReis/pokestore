import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { Container } from "./Navbar.styles";

export default function Navbar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container>
      <button type="button" onClick={() => navigate("/")}>
        Pokémon
      </button>
      <div>
        <Button title="Pokemon" onClick={() => navigate("/")} />
        <Button title="Loja" onClick={() => navigate("/example")} />
      </div>
    </Container>
  );
}
