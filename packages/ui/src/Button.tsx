import { type ReactNode } from 'react';
import Loading from './Loading';
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
}

export default function Button({
  children,
  disabled = false,
  className = '',
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button className={`button ${className}`} disabled={disabled || isLoading} {...props}>
      {isLoading ? <Loading /> : children}
    </button>
  );
}
