import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import ComplexTable from "./complex-table"
import PaginationTable from "./pagination-table"
import SelectionTable from "./selection-table"
import SimpleTable from "./simple-table"

interface Props {}
export default function Page({}: Props) {
  return (
    <div className='space-y-8'>
      <Card>
        <CardHeader>
          <CardTitle>SimpleTable</CardTitle>
        </CardHeader>
        <CardContent>
          <SimpleTable />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>PaginationTable</CardTitle>
        </CardHeader>
        <CardContent>
          <PaginationTable />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SelectionTable</CardTitle>
        </CardHeader>
        <CardContent>
          <SelectionTable />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ComplexTable</CardTitle>
        </CardHeader>
        <CardContent>
          <ComplexTable />
        </CardContent>
      </Card>
    </div>
  )
}
