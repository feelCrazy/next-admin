import { getServerSession, type NextAuthOptions } from "next-auth"
import Github from "next-auth/providers/github"

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
  }
}

export const config = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthOptions

export const getCurrentUser = async () => {
  const session = await getServerSession(config)
  return session?.user
}

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      GITHUB_ID: string
      GITHUB_SECRET: string
    }
  }
}
