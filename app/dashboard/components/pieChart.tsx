"use client"

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
]
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

interface Props {}
export default function PieChartAnalytics({}: Props) {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
        <Pie
          data={data}
          innerRadius={85}
          radius={8}
          fill='#8884d8'
          paddingAngle={2}
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            border: "none",
            borderRadius: 6,
            background: "#f0f0f0",
            padding: "0 6px",
            fontSize: 14,
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
