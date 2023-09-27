import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

import AuthProvider from "./authProvider"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <main className='flex min-h-screen gap-4'>
        <Sidebar />
        <div className='flex-1'>
          <Header />
          {children}
        </div>
      </main>
    </AuthProvider>
  )
}
