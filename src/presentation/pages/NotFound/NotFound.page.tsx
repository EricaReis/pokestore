import { Container } from './NotFound.styles';

export function NotFound(): JSX.Element {
  return (
    <Container>
      <h1>Erro 404 - Página não encontrada</h1>
      <p>
        A página que você tentou acessar não existe ou não está mais disponível.
      </p>
      <p>
        Confira o endereço e tente novamente ou
        <a href="/">retorne para a página inicial do POKESTORE.</a>
      </p>
    </Container>
  );
}
