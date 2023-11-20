"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { PartyPopper, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-14 items-center justify-between'>
          <div className='mr-4 hidden md:flex'>
            <Link href='/' className='mr-6 flex items-center space-x-2'>
              <PartyPopper size={22} />
              <span className='hidden font-bold sm:inline-block'>
                Hello Admin
              </span>
            </Link>
            <nav className='flex items-center space-x-6 text-sm font-medium'>
              <Link href='/'>Documentation</Link>
              <Link href='/'>Components</Link>
              <Link href='/'>Themes</Link>
              <Link href='/'>Examples</Link>
            </nav>
          </div>

          <nav className='flex items-center gap-4'>
            <Link
              href='/login'
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Login
            </Link>
            <Link
              href='/signup'
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Signup
            </Link>
          </nav>
        </div>
      </header>

      <div className='container'>
        <PageHeader className='pb-8'>
          <div className='inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium'>
            🎉 <Separator className='mx-2 h-4' orientation='vertical' />{" "}
            <span className='sm:hidden'>Style, a new CLI and more.</span>
            <span className='hidden sm:inline'>
              Introducing Style, a new CLI and more.
            </span>
            <ArrowRightIcon className='ml-1 h-4 w-4' />
          </div>
          <PageHeaderHeading>Build your Admin Dashboard.</PageHeaderHeading>
          <PageHeaderDescription>
            This is a starter template using the following stack:
            <ul className='ml-10 list-disc'>
              <li>Framework - Next.js 13</li>
              <li>Language - TypeScript</li>
              <li>Auth - NextAuth.js</li>
              <li>Styling - Tailwind CSS</li>
              <li>Components - shadcn-ui</li>
              <li>Linting - ESLint</li>
              <li>Formatting - Prettier</li>
            </ul>
          </PageHeaderDescription>
          <div className='flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10'>
            <Link href='/login' className={cn(buttonVariants())}>
              Get Started
            </Link>
            <Link
              target='_blank'
              rel='noreferrer'
              href='https://github.com/feelCrazy/next-admin'
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <GitHubLogoIcon className='mr-2 h-4 w-4' />
              GitHub
            </Link>
          </div>
        </PageHeader>

        <section className='flex items-center justify-center space-y-8 overflow-hidden'>
          <div className='rounded border'>
            <Image src='/home.png' width={1280} height={866} alt='Dashboard' />
          </div>
        </section>
      </div>

      <footer className='py-6 md:px-8 md:py-0'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
            Built by{" "}
            <a
              href={"/"}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              wming
            </a>
            . The source code is available on{" "}
            <a
              href='https://github.com/feelCrazy/next-admin'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  )
}
function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]",
        className,
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <div
      className={cn(
        "max-w-[750px] text-lg text-muted-foreground sm:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
