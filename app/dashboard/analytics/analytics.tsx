"use client"

import { useState } from "react"
import { Info } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

import PieChartAnalytics from "../components/pieChart"
import SimpleAreaChart from "./area-chart"
import SimpleLineChart from "./line-chart"
import SimpleRadarChart from "./radar-chart"
import VerticalBarChar from "./vertical-bar-chart"

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
          <CardTitle>AreaChart</CardTitle>
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
          <SimpleAreaChart data={data} />
        </CardContent>
      </Card>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <Card className='col-span-3 xl:col-span-2'>
          <CardHeader>
            <CardTitle>BarChar</CardTitle>
          </CardHeader>
          <CardContent>
            <VerticalBarChar data={data} />
          </CardContent>
        </Card>

        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle>LineChart</CardTitle>
          </CardHeader>
          <CardContent>
            <SimpleLineChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>PieChart</CardTitle>
          </CardHeader>
          <CardContent className='pl-0'>
            <PieChartAnalytics />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='flex flex-row items-center gap-2'>
              RadarChart
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
            <SimpleRadarChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
