import { useNavigate } from 'react-router-dom';

import Button from 'presentation/components/base/button/DefaultButton/Button';

import logo from 'shared/assets/images/logo.png';

import { ButtonContainer, Container, ContainerIcons } from './Header.styles';

export default function Header(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container>
      <img
        src={logo}
        alt="logo"
        onClick={() => {
          navigate('/');
        }}
      />
      <ButtonContainer>
        <Button
          title="Pokemon"
          onClick={() => {
            navigate('/');
          }}
        />
        <Button
          title="Loja"
          onClick={() => {
            navigate('/example');
          }}
        />
        <Button
          title="Adoção"
          onClick={() => {
            navigate('/adoption');
          }}
        />
        <ContainerIcons>
          <Button
            title="Favoritos"
            onClick={() => {
              navigate('/');
            }}
          />
          <Button
            title="Carrinho"
            onClick={() => {
              navigate('/');
            }}
          />
        </ContainerIcons>
      </ButtonContainer>
    </Container>
  );
}
