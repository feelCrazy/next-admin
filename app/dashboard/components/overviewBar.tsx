"use client"

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

interface Props {}

const data = [
  {
    name: "Jan",
    pv: 2400,
  },
  {
    name: "Feb",
    pv: 1398,
  },
  {
    name: "Mar",
    pv: 3041,
  },
  {
    name: "Apr",
    pv: 3908,
  },
  {
    name: "May",
    pv: 4800,
  },
  {
    name: "Jun",
    pv: 3800,
  },
  {
    name: "Jul",
    pv: 5002,
  },
  {
    name: "Aug",
    pv: 2300,
  },
  {
    name: "Sep",
    pv: 5300,
  },
  {
    name: "Oct",
    pv: 4100,
  },
  {
    name: "Nov",
    pv: 2100,
  },
  {
    name: "Dec",
    pv: 1300,
  },
]

export default function OverviewBar({}: Props) {
  return (
    <div>
      <ResponsiveContainer width='100%' height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey='name'
            fontSize={12}
            stroke='#888888'
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            fontSize={12}
            stroke='#888888'
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Bar dataKey='pv' fill='rgb(251 146 60)' radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
