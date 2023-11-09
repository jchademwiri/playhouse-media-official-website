'use client';
import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider basePath='/api/auth'>{children}</SessionProvider>;
};
export default AuthProvider;
