import { ButtonProps } from "./Button.interfaces";
import { Container } from "./Button.styles";

export default function Button({ title }: ButtonProps): JSX.Element {
  return <button type="button">{title}</button>;
}
