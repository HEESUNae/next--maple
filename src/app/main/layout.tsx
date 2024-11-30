import { ReactNode } from 'react';
import { Header } from '@/widgets/header/header';

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <>{children}</>;
}
