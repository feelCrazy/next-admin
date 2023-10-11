"use client"

import { ElementRef, useRef } from "react"
import { Camera } from "lucide-react"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface Props {}
export default function FormWithoutValidation({}: Props) {
  const refInput = useRef<ElementRef<"input">>(null)
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='col-span-1'>
        <Card>
          <CardContent>
            <div className='flex flex-col items-center space-y-6 pb-10 pt-20'>
              <div
                className='m-auto h-36 w-36 cursor-pointer rounded-full border border-dashed p-2'
                onClick={() => {
                  refInput.current?.click()
                }}
              >
                <Input
                  type='file'
                  ref={refInput}
                  accept='image/*'
                  className='hidden'
                />
                <div className='h-32 w-32 rounded-full bg-red-400'>
                  <div className='bg-[rgba(22, 28, 36, 0.64)] absolute flex h-32 w-32 flex-col items-center justify-center rounded-full text-white opacity-0 duration-300 hover:opacity-70'>
                    <Camera size={30} />
                    <div className='text-sm'>Update photo</div>
                  </div>
                </div>
              </div>
              <div className='text-center text-sm text-muted-foreground'>
                Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
              </div>

              <div className='flex cursor-pointer items-center gap-4'>
                <Label htmlFor='public'>Public Profile</Label>
                <Switch id='public' defaultChecked />
              </div>

              <Button variant={"destructive"}>Delete User</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='col-span-2'>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you are done.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-1'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' defaultValue='Frankie Frankie' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' defaultValue='examples@examples.com' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='phone'>Phone Number</Label>
                <Input id='phone' defaultValue='400123123' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='address'>Address</Label>
                <Input id='address' defaultValue='California' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='country'>Country</Label>
                <Select defaultValue='apple'>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a country' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='apple'>Apple</SelectItem>
                    <SelectItem value='banana'>United States</SelectItem>
                    <SelectItem value='blueberry'>Blueberry</SelectItem>
                    <SelectItem value='grapes'>Grapes</SelectItem>
                    <SelectItem value='pineapple'>Pineapple</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-1'>
                <Label htmlFor='state'>State/Region</Label>
                <Input id='state' defaultValue='California' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='city'>City</Label>
                <Input id='city' defaultValue='San Francisco' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='zip'>Zip/Code</Label>
                <Input id='zip' defaultValue='94116' />
              </div>

              <div className='col-span-2 space-y-1'>
                <Label htmlFor='zip'>About</Label>
                <Textarea id='zip' placeholder='about...' rows={4} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                toast({
                  title: "Update success!",
                  duration: 3000,
                })
              }}
            >
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
