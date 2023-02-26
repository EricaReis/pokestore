import { type ButtonHTMLAttributes } from 'react';

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}
