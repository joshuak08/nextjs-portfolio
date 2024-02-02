"use client"
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeSwitcher() {
    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
      setMounted(true)
    }, [])

    if(!mounted) return null

    return (
      <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <SunIcon className='h-5 w-5 text-white'/>
        ) : (
        <MoonIcon className='h-5 w-5 text-black' />
      )}
    
    </button>
    )
}