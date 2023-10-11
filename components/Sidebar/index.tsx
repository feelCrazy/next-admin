"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  GanttChartSquare,
  Home,
  Library,
  LineChart,
  ListMusic,
  Mic2,
  Music2,
  Receipt,
  Table,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"

const menu = [
  {
    label: "Dashboard",
    path: "200000",
    children: [
      {
        label: "Home",
        path: "/dashboard",
        icon: <Home size={16} className='mr-2' />,
      },
      {
        label: "Bill",
        path: "/dashboard/list",
        icon: <Receipt size={16} className='mr-2' />,
      },
      {
        label: "Analytics",
        path: "/dashboard/analytics",
        icon: <LineChart size={16} className='mr-2' />,
      },
      {
        label: "Table",
        path: "/dashboard/table",
        icon: <Table size={16} className='mr-2' />,
      },
      {
        label: "Form",
        path: "/dashboard/form",
        icon: <GanttChartSquare size={16} className='mr-2' />,
      },
    ],
  },
  {
    label: "Library",
    path: "4",
    children: [
      {
        label: "Playlists",
        path: "4",
        icon: <ListMusic size={16} className='mr-2' />,
      },
      {
        label: "Songs",
        path: "5",
        icon: <Music2 size={16} className='mr-2' />,
      },
      {
        label: "Made for You",
        path: "6",
        icon: <User size={16} className='mr-2' />,
      },
      {
        label: "Artists",
        path: "7",
        icon: <Mic2 size={16} className='mr-2' />,
      },
      {
        label: "Albums",
        path: "8",
        icon: <Library size={16} className='mr-2' />,
      },
    ],
  },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: MenuItem[]
  onClick?: () => void
}

interface MenuItem {
  label: string
  path: string
  icon?: React.ReactElement
  children?: MenuItem[]
}
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
export default function Sidebar({
  className,
  items = menu,
  onClick,
}: SidebarProps) {
  const pathName = usePathname()

  const renderChildren = (items: MenuItem[]) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <div key={item.label} className='px-3 py-2'>
            <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
              {item.label}
            </h2>
            <div>
              {item.children.map((el) => {
                return (
                  <Button
                    key={el.label}
                    asChild
                    onClick={onClick}
                    variant={el.path === pathName ? "secondary" : "ghost"}
                    className='mb-1 w-full justify-start'
                  >
                    <Link href={el.path}>
                      {el.icon}
                      {el.label}{" "}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
        )
      } else {
        return (
          <div key={item.label}>
            <Button
              key={item.label}
              variant={item.path === pathName ? "secondary" : "ghost"}
              className='w-full justify-start'
            >
              {item.icon}
              {item.label}
            </Button>
          </div>
        )
      }
    })
  }

  return (
    <div className={cn("h-full w-[280px]", className)}>
      <div className='py-4'>
        {renderChildren(items)}

        <div className='py-2'>
          <h2 className='relative px-7 text-lg font-semibold tracking-tight'>
            Playlists
          </h2>
          <ScrollArea className='h-[300px] px-1'>
            <div className='p-2'>
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant='ghost'
                  className='w-full justify-start font-normal'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-2 h-4 w-4'
                  >
                    <path d='M21 15V6' />
                    <path d='M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
                    <path d='M12 12H3' />
                    <path d='M16 6H3' />
                    <path d='M12 18H3' />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
