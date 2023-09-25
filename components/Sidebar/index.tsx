"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuItem[]
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
export default function Sidebar({ className, items }: SidebarProps) {
  const pathName = usePathname()
  const [path, setPath] = useState(pathName)

  const onClick = (val: string) => {
    setPath(val)
  }
  const renderChildren = (items: MenuItem[]) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <div key={item.label} className='px-3 py-2'>
            <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
              {item.label}
            </h2>
            <div className='space-y-1'>
              {item.children.map((el) => {
                return (
                  <Button
                    key={el.label}
                    variant={el.path === path ? "secondary" : "ghost"}
                    className='w-full justify-start'
                    onClick={() => onClick(el.path)}
                  >
                    {el.icon}
                    {el.label}
                  </Button>
                )
              })}
            </div>
          </div>
        )
      } else {
        return (
          <div className='space-y-1' key={item.label}>
            <Button
              key={item.label}
              variant={item.path === path ? "secondary" : "ghost"}
              className='w-full justify-start'
              onClick={() => onClick(item.path)}
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
    <div className={cn("w-[280px] pb-12", className)}>
      <div className='space-y-4 py-4'>
        {renderChildren(items)}

        <div className='py-2'>
          <h2 className='relative px-7 text-lg font-semibold tracking-tight'>
            Playlists
          </h2>
          <ScrollArea className='h-[300px] px-1'>
            <div className='space-y-1 p-2'>
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
