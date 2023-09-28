import Image from "next/image"
import { GlobeIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import cn from "../../public/flag/cn.svg"
import de from "../../public/flag/de.svg"
import gb from "../../public/flag/gb.svg"
import jp from "../../public/flag/jp.svg"

interface Props {}

export default function SwtichLanguage({}: Props) {
  const items = [
    {
      label: "英文",
      img: gb,
    },
    {
      label: "中文",
      img: cn,
    },
    {
      label: "日文",
      img: jp,
    },
    {
      label: "德文",
      img: de,
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <GlobeIcon className='h-5 w-5' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item.label} className='gap-1'>
            <Image alt='' src={item.img} className='w-6 rounded-sm' />{" "}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
