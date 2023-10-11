import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
          <CardTitle>12</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>12</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>12</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  )
}
