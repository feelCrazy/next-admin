import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import FormWithValidation from "./form-with-validation"
import FormWithoutValidation from "./form-without-validation"

interface Props {}

export default function Page({}: Props) {
  return (
    <Tabs defaultValue='account'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Form without validation</TabsTrigger>
        <TabsTrigger value='password'>Form with validation</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <FormWithoutValidation />
      </TabsContent>
      <TabsContent value='password'>
        <FormWithValidation />
      </TabsContent>
    </Tabs>
  )
}
