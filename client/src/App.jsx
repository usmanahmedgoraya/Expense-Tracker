/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import AddTransaction from "./components/AddTransaction"
import HoverCard from "./components/Cards/HoverCard"
import IncomeExpensive from "./components/IncomeExpensive"
import { GlobalProvider } from "./context/GlobalContext"

const App = () => {
  const [darkMode, setdarkMode] = useState(false)

  const ThemeMode = () => {


    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setdarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setdarkMode(false)
    }

    // Whenever the user chooses light mode
    localStorage.theme = 'light'

    // Whenever the user chooses dark mode
    localStorage.theme = 'dark'

    // Whenever the user chooses to respect the OS preference
    localStorage.removeItem('theme')
  }

  useEffect(() => {
    ThemeMode()
  }, [])


  const handleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setdarkMode((prevDarkMode) => {
      return !prevDarkMode
    })
  }


  return (
    <div className="bg-slate-200 min-h-screen dark:bg-slate-900 dark:text-white">
      {/* Dark_Mode Toggle */}
      <GlobalProvider>
        <div className="w-full py-7 h-auto flex justify-center items-center flex-col ">
          <HoverCard handleDarkMode={handleDarkMode} darkMode={darkMode} />
          <AddTransaction />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="container sm:max-w-xs max-w-[16rem]">
            <IncomeExpensive />
          </div>
        </div>
      </GlobalProvider>
    </div>
  )
}

export default App