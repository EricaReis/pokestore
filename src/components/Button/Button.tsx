import { ButtonProps } from "./Button.interfaces";
import { Container } from "./Button.styles";

export default function Button({ title, ...rest }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...rest}>
      {title}
    </button>
  );
}
