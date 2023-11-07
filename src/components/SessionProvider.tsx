'use client';
import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
  children: ReactNode;
}

const SProvider: FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default SProvider;
