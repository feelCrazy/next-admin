"use client"

import { useState } from "react"
import { Info } from "lucide-react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as TooltipChart,
  XAxis,
  YAxis,
} from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {}

const DATA = [
  {
    name: "Jan",
    value: 2400,
  },
  {
    name: "Feb",
    value: 1398,
  },
  {
    name: "Mar",
    value: 3041,
  },
  {
    name: "Apr",
    value: 3908,
  },
  {
    name: "May",
    value: 4800,
  },
  {
    name: "Jun",
    value: 3800,
  },
  {
    name: "Jul",
    value: 5002,
  },
]

export default function Analytics({}: Props) {
  const [data, setData] = useState(DATA)
  const changeSelect = (value: string) => {
    const temp = []
    for (let index = 1; index < Number(value); index++) {
      temp.push({
        name: `day ${index}`,
        value: Math.floor(Math.random() * 10000),
      })
    }
    setData(temp)
  }

  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between'>
          <CardTitle>Monthly</CardTitle>
          <Select defaultValue='7' onValueChange={changeSelect}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select a fruit' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='24'>Last 24 Hours</SelectItem>
              <SelectItem value='7'>Last 7 Days</SelectItem>
              <SelectItem value='30'>Last 30 Days</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <AnalyticsChart data={data} />
        </CardContent>
      </Card>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle className='flex flex-row items-center gap-2'>
              Top Pages
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info size={14} />
                  </TooltipTrigger>
                  <TooltipContent>Add to library</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent className='pl-0'>
            <div
              className='cursor-pointer border-l-2 border-l-transparent p-1
             hover:border-l-black hover:bg-slate-50'
            >
              <div className='flex justify-between rounded bg-gray-100 p-1 text-sm'>
                <div className='font-light'>/detail/815/ADN-499</div>
                <div className='font-medium'>8</div>
              </div>
            </div>
            <div
              className='cursor-pointer border-l-2 border-l-transparent p-1
             hover:border-l-black hover:bg-slate-50'
            >
              <div className='flex justify-between rounded bg-gray-100 p-1 text-sm'>
                <div className='font-light'>/detail/815/ADN-499</div>
                <div className='font-medium'>8</div>
              </div>
            </div>
            <div
              className='cursor-pointer border-l-2 border-l-transparent p-1
             hover:border-l-black hover:bg-slate-50'
            >
              <div className='flex justify-between rounded bg-gray-100 p-1 text-sm'>
                <div className='font-light'>/detail/815/ADN-499</div>
                <div className='font-medium'>8</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Referrers</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className='cursor-pointer border-l-2 border-l-transparent p-1
             hover:border-l-black hover:bg-slate-50'
            >
              <div className='flex justify-between rounded bg-gray-100 p-1 text-sm'>
                <div className='font-light'>/detail/815/ADN-499</div>
                <div className='font-medium'>8</div>
              </div>
            </div>
            <div
              className='cursor-pointer border-l-2 border-l-transparent p-1
             hover:border-l-black hover:bg-slate-50'
            >
              <div className='flex justify-between rounded bg-gray-100 p-1 text-sm'>
                <div className='font-light'>/detail/815/ADN-499</div>
                <div className='font-medium'>8</div>
              </div>
            </div>
            <div
              className='cursor-pointer border-l-2 border-l-transparent p-1
             hover:border-l-black hover:bg-slate-50'
            >
              <div className='flex justify-between rounded bg-gray-100 p-1 text-sm'>
                <div className='font-light'>/detail/815/ADN-499</div>
                <div className='font-medium'>8</div>
              </div>
            </div>
            <div
              className='cursor-pointer border-l-2 border-l-transparent p-1
             hover:border-l-black hover:bg-slate-50'
            >
              <div className='flex justify-between rounded bg-gray-100 p-1 text-sm'>
                <div className='font-light'>/detail/815/ADN-499</div>
                <div className='font-medium'>8</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const AnalyticsChart = ({
  data,
}: {
  data: { name: string; value: number }[]
}) => {
  return (
    <ResponsiveContainer height={350}>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' vertical={false} />
        <XAxis dataKey='name' />
        <YAxis />
        <TooltipChart />
        <Area
          type='monotone'
          dataKey='value'
          dot={false}
          stroke='#0070f3'
          fill='#e1ebfd'
          strokeWidth={1.6}
          activeDot={{ r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
