import {
  LayoutGrid,
  Library,
  ListMusic,
  Mic2,
  Music2,
  PlayCircle,
  Radio,
  User,
} from "lucide-react"

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

  const menu = [
    {
      label: "Discover",
      path: "200000",
      children: [
        {
          label: "Listen Now",
          path: "/main",
          icon: <PlayCircle size={16} className='mr-2' />,
        },
        {
          label: "Browse",
          path: "/2",
          icon: <LayoutGrid size={16} className='mr-2' />,
        },
        {
          label: "Radio",
          path: "/3",
          icon: <Radio size={16} className='mr-2' />,
        },
      ],
    },
    {
      label: "Library",
      path: "4",
      children: [
        {
          label: "Playlists",
          path: "/4",
          icon: <ListMusic size={16} className='mr-2' />,
        },
        {
          label: "Songs",
          path: "/5",
          icon: <Music2 size={16} className='mr-2' />,
        },
        {
          label: "Made for You",
          path: "/6",
          icon: <User size={16} className='mr-2' />,
        },
        {
          label: "Artists",
          path: "/7",
          icon: <Mic2 size={16} className='mr-2' />,
        },
        {
          label: "Albums",
          path: "/8",
          icon: <Library size={16} className='mr-2' />,
        },
      ],
    },
  ]

  return (
    <main className='flex'>
      <Sidebar items={menu} />

      <div className='flex-1'>
        <Header />
        {children}
      </div>
    </main>
  )
}
