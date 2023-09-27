"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const user = sessionStorage.getItem("user") || "null"
    const token = JSON.parse(user) !== null
    setShow(token)
    if (!token) {
      router.push("/login")
    }
  }, [router])
  if (!show) {
    return null
  }

  return <>{children}</>
}
