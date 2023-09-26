import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const cookies = request.cookies.get("toekn")
  console.log(">>>>>>>middleware cookies", cookies)

  if (!cookies?.value) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL("/login", request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
}
