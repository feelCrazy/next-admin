import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  if (!cookieStore.get("email")) {
    redirect("/login")
  }
  return (
    <main className='flex min-h-screen'>
      <Sidebar />
      <div className='flex-1'>
        <>
          <Header />
        </>

        <div className='px-4 py-6'>{children}</div>
      </div>
    </main>
  )
}
