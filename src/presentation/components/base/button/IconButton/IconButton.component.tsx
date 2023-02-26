import { type IIconButtonProps } from './IconButton.types';

import { Container, StyledButton } from './IconButton.styles';

export default function IconButton({
  icon,
  ...rest
}: IIconButtonProps): JSX.Element {
  return (
    <Container>
      <StyledButton {...rest}>{icon}</StyledButton>
    </Container>
  );
}
