import prisma from '@/prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!existingUser) return null;

        const passwordMatches = await compare(
          credentials.password,
          existingUser.password
        );
        if (!passwordMatches) return null;

        return {
          id: existingUser.id,
          email: existingUser.email,
          fullname: existingUser.fullname,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          fullname: user.fullname,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          fullname: token.fullname,
        },
      };
    },
  },
};
