import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    fullname: string;
  }
  interface Session {
    user: User & {
      fullname: string;
    };
    token: {
      fullname: string;
    };
  }
}
