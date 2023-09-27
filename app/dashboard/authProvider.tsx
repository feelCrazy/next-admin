"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const user = sessionStorage.getItem("user") || "null"
  const token = JSON.parse(user) !== null

  useEffect(() => {
    if (!token) {
      router.push("/login")
    }
  }, [router, token])

  if (!token) {
    return
  }

  return <>{children}</>
}
