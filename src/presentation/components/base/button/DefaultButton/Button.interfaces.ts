import { ButtonHTMLAttributes } from "react";

export interface DefaultButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  outlined?: boolean;
  borderless?: boolean;
}

export interface StyledDefaultButtonProps {
  outlined: boolean;
  borderless: boolean;
}
