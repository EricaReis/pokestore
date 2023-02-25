import { type IDefaultButtonProps } from './Button.types';

import { Container, StyledButton } from './Button.styles';

export default function DefaultButton({
  title,
  outlined = false,
  borderless = false,
  ...rest
}: IDefaultButtonProps): JSX.Element {
  return (
    <Container>
      <StyledButton
        outlined={outlined}
        borderless={borderless}
        type="button"
        {...rest}
      >
        {title}
      </StyledButton>
    </Container>
  );
}
