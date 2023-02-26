import { RiHeart3Line, RiShoppingCartLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import Button from 'presentation/components/base/button/DefaultButton/Button.component';

import logo from 'shared/assets/images/logo.png';

import IconButton from '../button/IconButton/IconButton.component';

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
          title="Pokémon"
          borderless
          onClick={() => {
            navigate('/');
          }}
        />
        <Button
          title="Loja"
          borderless
          onClick={() => {
            navigate('/example');
          }}
        />
        <Button
          title="Adoção"
          outlined
          onClick={() => {
            navigate('/adoption');
          }}
        />
        <ContainerIcons>
          <IconButton
            icon={<RiHeart3Line />}
            onClick={() => {
              navigate('/');
            }}
          />
          <IconButton
            icon={<RiShoppingCartLine />}
            onClick={() => {
              navigate('/');
            }}
          />
        </ContainerIcons>
      </ButtonContainer>
    </Container>
  );
}
