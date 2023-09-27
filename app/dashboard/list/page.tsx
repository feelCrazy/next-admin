import { columns, Payment } from "./columns"
import DataTable from "./data-table"

interface Props {}
export default function Page({}: Props) {
  const data: Payment[] = [
    {
      id: "728ed522",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f23",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f11",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f455",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f5666",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ]
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
