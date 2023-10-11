import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export default function VerticalBarChar({
  data,
}: {
  data: { name: string; value: number }[]
}) {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <BarChart
        layout='vertical'
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' vertical={false} />
        <XAxis type='number' />
        <YAxis dataKey='name' type='category' />
        <Tooltip />
        <Bar
          dataKey='value'
          barSize={10}
          fill='#82ca9d'
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
