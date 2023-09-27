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
      <main className='flex min-h-screen'>
        <Sidebar />
        <div className='flex-1'>
          <>
            <Header />
          </>

          <div className='px-4 py-6'>{children}</div>
        </div>
      </main>
    </AuthProvider>
  )
}
