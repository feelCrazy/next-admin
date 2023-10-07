import { getCurrentUser } from "@/lib/auth"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  return (
    <main className='flex min-h-screen'>
      <Sidebar className='border-r' />
      <div className='flex-1'>
        <Header
          user={{
            name: user?.name,
            image: user?.image,
            email: user?.email,
          }}
        />

        <div className='px-4 py-6'>{children}</div>
      </div>
    </main>
  )
}
