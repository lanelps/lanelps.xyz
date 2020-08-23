import React, { useState, useEffect, createContext } from 'react'

const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {
  const [time] = useState(new Date().getHours())
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (time > 6 && time <= 18) {
      setIsDark(false)
      document.documentElement.style.setProperty('--main-bg-color', '#fff')
      document.documentElement.style.setProperty('--main-color', '#000')
      document.documentElement.style.setProperty('--purple-color', '#cbcbff')
    } else {
      setIsDark(true)
      document.documentElement.style.setProperty('--main-bg-color', '#000')
      document.documentElement.style.setProperty('--main-color', '#fff')
      document.documentElement.style.setProperty('--purple-color', '#51516e')
    }
  }, [time])

  useEffect(() => {
    if (!isDark) {
      document.documentElement.style.setProperty('--main-bg-color', '#fff')
      document.documentElement.style.setProperty('--main-color', '#000')
      document.documentElement.style.setProperty('--purple-color', '#cbcbff')
    } else {
      document.documentElement.style.setProperty('--main-bg-color', '#000')
      document.documentElement.style.setProperty('--main-color', '#fff')
      document.documentElement.style.setProperty('--purple-color', '#51516e')
    }
  }, [isDark])

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContext

export { DarkModeProvider }
