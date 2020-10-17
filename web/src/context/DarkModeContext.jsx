import React, { useState, useEffect, createContext } from 'react'

const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {
  const [time] = useState(new Date().getHours())
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (time > 6 && time <= 18) {
      setIsDark(false)
    } else {
      setIsDark(true)
    }
  }, [time])

  useEffect(() => {
    if (!isDark) {
      document.documentElement.style.setProperty('--color-main-bg', '#fff')
      document.documentElement.style.setProperty('--color-main', '#000')
      document.documentElement.style.setProperty('--color-purple', '#cbcbff')
    } else {
      document.documentElement.style.setProperty('--color-main-bg', '#000')
      document.documentElement.style.setProperty('--color-main', '#fff')
      document.documentElement.style.setProperty('--color-purple', '#51516e')
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
