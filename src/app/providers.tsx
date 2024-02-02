"use client"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';


export  function Providers ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <NextThemesProvider 
    attribute="class"
    defaultTheme="system"
    >
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </NextThemesProvider>
  )
}