import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // if ("") {
  //   return <div>hello</div>
  // }

  const playlists = [
    "Recently Added",
    "Recently Played",
    "Top Songs",
    "Top Albums",
    "Top Artists",
    "Logic Discography",
    "Bedtime Beats",
    "Feeling Happy",
    "I miss Y2K Pop",
    "Runtober",
    "Mellow Days",
    "Eminem Essentials",
  ]
  return (
    <main className='flex'>
      <Sidebar playlists={playlists} />

      <div className='flex-1'>
        <Header />
        {children}
      </div>
    </main>
  )
}
