import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GlobeIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

import Image from "next/image"

interface Props {}

export default function SwtichLanguage({}: Props) {
  const items = [
    {
      label: "英文",
      img: (
        <Image
          src={require("../../public/flag/gb.svg")}
          alt=''
          className='w-6 rounded-sm'
        />
      ),
    },
    {
      label: "中文",
      img: (
        <Image
          src={require("../../public/flag/cn.svg")}
          alt=''
          className='w-6 rounded-sm'
        />
      ),
    },
    {
      label: "日文",
      img: (
        <Image
          src={require("../../public/flag/jp.svg")}
          alt=''
          className='w-6 rounded-sm'
        />
      ),
    },
    {
      label: "德文",
      img: (
        <Image
          src={require("../../public/flag/de.svg")}
          alt=''
          className='w-6 rounded-sm'
        />
      ),
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <GlobeIcon className='w-5 h-5' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item.label} className='gap-1'>
            {item.img} {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
