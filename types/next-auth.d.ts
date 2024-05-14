import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"


declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      name?: string | null
      id?: string | null
      token?: string | null
      email?: string | null
      image?: string | null
    }
    token?: string | null
    id?: integer | null

  }

  interface User {
    image?: string
    token?: string
    id?: string | null
    
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string
    token?: string
  }
}