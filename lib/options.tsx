import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { authorizeUser, loginUser } from '@/lib/data';
interface User {
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  token: any;
  id: any;
}

export const options: NextAuthOptions = {
  pages: {
    signIn: '/login',
    //signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Username:',
          type: 'text',
          placeholder: 'username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials: any) {
       
        const user = await authorizeUser(credentials);
        
        return { id: user?.id, email: user?.email, name: user?.name, password: credentials?.password, token: user?.token };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      //return 'https://whitelabel.referrals.com/dashboard'
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log('baseUrl',baseUrl)
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.token = token.token;
      session.id = token.id;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.token = user.token;
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  
};
