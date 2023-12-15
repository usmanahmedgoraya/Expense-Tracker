/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import AddTransaction from "./components/AddTransaction"
import Balance from "./components/Balance"
import IncomeExpensive from "./components/IncomeExpensive"
import Header from "./components/Header"
import { GlobalProvider } from "./context/GlobalContext"
import DarkModeToggle from "./components/DarkModeToggle"

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
      <DarkModeToggle handleDarkMode={handleDarkMode} darkMode={darkMode} />

      <GlobalProvider>
        <div className="w-full h-auto flex justify-center items-center flex-col ">
          <div className="container max-w-[16rem] sm:max-w-[20rem]">
            <Header />
            <Balance />
            <AddTransaction />
            <IncomeExpensive />
          </div>
        </div>
      </GlobalProvider>
    </div>
  )
}

export default App