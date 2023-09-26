"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Command, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <div className='container relative grid h-screen min-w-[320px] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <Link
          href='/login'
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8",
          )}
        >
          Login
        </Link>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <Command size={24} className='mr-2' />
            Acme Inc
          </div>
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className='text-sm'>Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Create an account
              </h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email below to create your account
              </p>
            </div>
            <div className={cn("grid gap-6")}>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setLoading(true)
                  setTimeout(() => {
                    setLoading(false)
                  }, 3000)
                }}
              >
                <div className='grid gap-2'>
                  <div className='grid gap-1'>
                    <Label className='sr-only' htmlFor='email'>
                      Email
                    </Label>
                    <Input
                      id='email'
                      placeholder='name@example.com'
                      type='email'
                      autoCapitalize='none'
                      autoComplete='email'
                      autoCorrect='off'
                    />
                  </div>
                  <Button disabled={loading}>
                    {loading && <Loader2 className='animate-spin' size={16} />}
                    Sign In with Email
                  </Button>
                </div>
              </form>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <span className='w-full border-t' />
                </div>
                <div className='relative flex justify-center text-xs uppercase'>
                  <span className='bg-background px-2 text-muted-foreground'>
                    Or continue with
                  </span>
                </div>
              </div>
              <Button variant='outline' type='button' disabled={loading}>
                {loading ? (
                  <Loader2 className='mr-2 animate-spin' size={16} />
                ) : (
                  <GitHubLogoIcon className='mr-2 h-4 w-4' />
                )}
                Github
              </Button>
            </div>
            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking continue, you agree to our{" "}
              <Link
                href='/terms'
                className='underline underline-offset-4 hover:text-primary'
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href='/privacy'
                className='underline underline-offset-4 hover:text-primary'
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
