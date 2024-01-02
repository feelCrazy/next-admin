import NextAuth from "next-auth"

import { authConfig } from "./auth.config"

export default NextAuth(authConfig).auth

export const config = {
  matcher: ["/dashboard/:path*", "/editor/:path*", "/login", "/register"],
}
