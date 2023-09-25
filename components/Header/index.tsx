"use client"

import CommandMenu from "../CommandMenu"
import Setting from "../Setting"
import SwtichLanguage from "../SwitchLanguage"
import SwitchMode from "../SwitchMode"
import UserMenu from "../UserMenu"

interface Props {}

export default function Header({}: Props) {
  return (
    <div className='sticky top-0 flex h-14 items-center justify-between border-b border-cyan-300 px-8'>
      <CommandMenu />

      <div className='flex items-center gap-4'>
        <SwtichLanguage />
        <SwitchMode />
        <Setting />
        <UserMenu />
      </div>
    </div>
  )
}
