import { type ReactNode } from 'react';

export default function Button({
  children,
  onClick,
  disabled = false,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
