"use client"

import { useState } from "react"
import { format, subMonths } from "date-fns"
import { CalendarDays } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

interface Props {
  initDate?: DateRange | undefined
  onSelect?: (date: DateRange | undefined) => void
}
export default function DatePicker({
  onSelect,
  initDate = { from: subMonths(new Date(), 1), to: new Date() },
}: Props) {
  const [date, setDate] = useState<DateRange | undefined>(initDate)

  const onChange = (date: DateRange | undefined) => {
    setDate({
      from: date?.from,
      to: date?.to,
    })
    onSelect &&
      onSelect({
        from: date?.from,
        to: date?.to,
      })
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className={cn("font-normal", !date && "text-muted-foreground")}
          >
            <CalendarDays className={"mr-2 h-4 w-4"} />
            {date?.from && date.to ? (
              `${date?.from && format(date.from, "LLL dd, y")} - ${
                date?.to && format(date.to, "LLL dd, y")
              }`
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            numberOfMonths={2}
            selected={date}
            onSelect={onChange}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
