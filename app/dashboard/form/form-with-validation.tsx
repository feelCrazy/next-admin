"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface Props {}

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  phone: z
    .string({
      required_error: "Please input phone number",
    })
    .max(11, {
      message: "phone number error",
    })
    .min(9, {
      message: "phone number error",
    }),
  address: z.string().max(160).min(4).optional(),
  country: z.string({
    required_error: "Please select a country to display.",
  }),
  state: z.string().optional(),
  city: z.string().optional(),
  zip: z.string().optional(),
  about: z.string().max(220).optional(),
  public: z.boolean().optional(),
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
})
type formValues = z.infer<typeof formSchema>

export default function FormWithValidation({}: Props) {
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      zip: "",
      city: "",
      about: "",
      public: true,
      type: "all",
    },
  })

  const handleSubmit = (value: formValues) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(value, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you are done.
              </CardDescription>
            </CardHeader>

            <CardContent className='space-y-2'>
              <div className='grid grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          id='name'
                          placeholder='Frankie Frankie'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the name that will be displayed on your profile
                        and in emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          id='email'
                          placeholder='examples@examples.com'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the name that will be displayed on your profile
                        and in emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input id='phone' placeholder='400123123' {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the name that will be displayed on your profile
                        and in emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='address'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          id='address'
                          placeholder='California'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the name that will be displayed on your profile
                        and in emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='country'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Select a country' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='apple'>Apple</SelectItem>
                            <SelectItem value='banana'>
                              United States
                            </SelectItem>
                            <SelectItem value='blueberry'>Blueberry</SelectItem>
                            <SelectItem value='grapes'>Grapes</SelectItem>
                            <SelectItem value='pineapple'>Pineapple</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        This is the name that will be displayed on your profile
                        and in emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='state'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State/Region</FormLabel>
                      <FormControl>
                        <Input id='state' placeholder='California' {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the name that will be displayed on your profile
                        and in emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='city'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input
                          id='city'
                          placeholder='San Francisco'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the name that will be displayed on your profile
                        and in emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='zip'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip/Code</FormLabel>
                      <FormControl>
                        <Input id='zip' placeholder='94116' {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the name that will be displayed on your profile
                        and in emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='public'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0 p-4'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Public Profile</FormLabel>
                        <FormDescription>
                          You can manage your mobile notifications in the page.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='type'
                  render={({ field }) => (
                    <FormItem className='space-y-3'>
                      <FormLabel>Notify me about...</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className='flex flex-col space-y-1'
                        >
                          <FormItem className='flex items-center space-x-3 space-y-0'>
                            <FormControl>
                              <RadioGroupItem value='all' />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              All new messages
                            </FormLabel>
                          </FormItem>
                          <FormItem className='flex items-center space-x-3 space-y-0'>
                            <FormControl>
                              <RadioGroupItem value='mentions' />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              Direct messages and mentions
                            </FormLabel>
                          </FormItem>
                          <FormItem className='flex items-center space-x-3 space-y-0'>
                            <FormControl>
                              <RadioGroupItem value='none' />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              Nothing
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='about'
                  render={({ field }) => (
                    <FormItem className='col-span-2'>
                      <FormLabel>About</FormLabel>
                      <FormControl>
                        <Textarea
                          id='about'
                          placeholder='about...'
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the name that will be displayed on your profile
                        and in emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className='gap-4'>
              <Button type='submit'>Save changes</Button>

              <Button
                variant='secondary'
                type='reset'
                onClick={() => {
                  form.reset()
                  toast({
                    title: "Reset success!",
                    duration: 3000,
                  })
                }}
              >
                Reset changes
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  )
}
