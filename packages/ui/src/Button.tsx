import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, disabled = false, className = '', ...props }: ButtonProps) {
  return (
    <button className={`button ${className}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
