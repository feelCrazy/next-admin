"use client"
import SwitchMode from "../SwitchMode"
import Setting from "../Setting"
import CommandMenu from "../CommandMenu"
import UserMenu from "../UserMenu"
import SwtichLanguage from "../SwitchLanguage"

interface Props {}

export default function Header({}: Props) {
  return (
    <div className='h-14 px-8 border-b border-cyan-300 flex items-center justify-between sticky top-0'>
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
