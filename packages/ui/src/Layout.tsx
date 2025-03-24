import { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Header({ children, className }: LayoutProps) {
  return <header className={`header ${className}`}>{children}</header>;
}

export function Footer({ children, className }: LayoutProps) {
  return <footer className={`footer ${className}`}>{children}</footer>;
}

export function Main({ children, className }: LayoutProps) {
  return <main className={`main ${className}`}>{children}</main>;
}
