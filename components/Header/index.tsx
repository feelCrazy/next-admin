"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import CommandMenu from "../CommandMenu"
import Setting from "../Setting"
import SwtichLanguage from "../SwitchLanguage"
import SwitchMode from "../SwitchMode"
import UserMenu from "../UserMenu"

interface Props {}

export default function Header({}: Props) {
  const navRef = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        setShow(!entries[0].isIntersecting)
      },
      {
        root: null,
        rootMargin: `10px 0px`,
        threshold: 0,
      },
    )

    intersectionObserver.observe(navRef.current!)

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <>
      <div ref={navRef}></div>
      <div
        className={cn(
          "sticky top-0 z-50  flex h-16 items-center justify-between border-b bg-background px-8",
          {
            "h-12": show,
          },
        )}
      >
        <CommandMenu />

        <div className='flex items-center gap-4'>
          <SwtichLanguage />
          <SwitchMode />
          <Setting />
          <UserMenu />
        </div>
      </div>
    </>
  )
}
