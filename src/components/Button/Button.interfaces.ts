import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  outlined?: boolean;
  borderless?: boolean;
}

export interface StyledButtonProps {
  outlined: boolean;
  borderless: boolean;
}
