import { ButtonProps } from "./Button.interfaces";
import { Container, StyledButton } from "./Button.styles";

export default function Button({
  title,
  outlined = false,
  borderless = false,
  ...rest
}: ButtonProps): JSX.Element {
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
