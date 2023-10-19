import { CreditCard, DollarSign, LineChart, Users } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CardsChat } from "./components/chat"
import OverviewBar from "./components/overviewBar"
import PieChartAnalytics from "./components/pieChart"
import RecentSale from "./components/recentSale"

interface Props {}
export default function Page({}: Props) {
  return (
    <div className='space-y-8'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold'>Dashboard</h2>
      </div>

      <div className='space-y-4'>
        <div className='grid grid-cols-2 gap-4 xl:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Revenue
              </CardTitle>
              <DollarSign size={16} className='text-muted-foreground' />
            </CardHeader>

            <CardContent>
              <div className='text-2xl font-bold'>$123,123.92</div>
              <div className='text-sm text-muted-foreground'>
                +10.2% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Sales</CardTitle>
              <CreditCard size={16} className='text-muted-foreground' />
            </CardHeader>

            <CardContent>
              <div className='text-2xl font-bold'>+891</div>
              <div className='text-sm text-muted-foreground'>
                +10.2% from last month
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Active Now</CardTitle>
              <LineChart size={16} className='text-muted-foreground' />
            </CardHeader>

            <CardContent>
              <div className='text-2xl font-bold'>+179</div>
              <div className='text-sm text-muted-foreground'>
                +91 since last hour
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Subscriptions
              </CardTitle>
              <Users size={16} className='text-muted-foreground' />
            </CardHeader>

            <CardContent>
              <div className='text-2xl font-bold'>+2466</div>
              <div className='text-sm text-muted-foreground'>
                +32.2% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-4 lg:grid-cols-7'>
          <div className='col-span-4'>
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <OverviewBar />
              </CardContent>
            </Card>
          </div>

          <div className='col-span-3'>
            <Card>
              <CardHeader>
                <CardTitle>Top Installed Countries</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChartAnalytics />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-4'>
          <div className='col-span-2'>
            <CardsChat />
          </div>
          <div className='col-span-2'>
            <Card>
              <CardHeader>
                <CardTitle>Recent</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <RecentSale />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
