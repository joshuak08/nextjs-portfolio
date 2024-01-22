import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

// export default function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if(!mounted) return null

//   return (
//     <>
//         {theme === 'dark' ? (
//         <button
//         // className="bg-blue-800 dark:bg-blue-700"
//           onClick={() => setTheme('light')}
//         >
//             <img src="/sun.svg" alt="logo" height={25} width={25} />
//         </button> ) : (
//             <button
//             // className="bg-gray-800 dark:bg-gray-50"
//             onClick={() => setTheme('dark')}
//           >
//             <img src="/moon.svg" alt="logo" height={25} width={25} />
//           </button>
//         )}
//     </>
//   )
// };

export default function ThemeSwitcher() {
  const [ theme, setTheme ] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  // if(!mounted) return null

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
        {theme === 'dark' ? (
        <button
        // className="bg-blue-800 dark:bg-blue-700"
          onClick={() => setTheme('light')}
        >
            <img src="/sun.svg" alt="sun-logo" height={25} width={25} />
        </button> ) : (
            <button
            // className="bg-gray-800 dark:bg-gray-50"
            onClick={() => setTheme('dark')}
          >
            <img src="/moon.svg" alt="moon-logo" height={25} width={25} />
          </button>
        )}
    </>
  )
};