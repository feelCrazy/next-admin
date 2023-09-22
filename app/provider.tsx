"use client"
import { ThemeProvider } from "next-themes"
interface Props {
  children: React.ReactNode
}
export default function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </ThemeProvider>
  )
}
