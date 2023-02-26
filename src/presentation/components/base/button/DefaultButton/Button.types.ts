import { type ButtonHTMLAttributes } from 'react';

export interface IDefaultButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  outlined?: boolean;
  borderless?: boolean;
}

export interface IStyledDefaultButtonProps {
  outlined: boolean;
  borderless: boolean;
}
