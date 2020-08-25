import React, { useState, useEffect, useContext } from 'react'

import DarkModeContext from '../context/DarkModeContext'

export default function Git() {
  const { isDark, setIsDark } = useContext(DarkModeContext)

  const [branch, setBranch] = useState('(light-theme)')

  useEffect(() => {
    console.log(isDark)
    if (isDark) {
      setBranch('(dark-theme)')
    } else {
      setBranch('(light-theme)')
    }
  }, [isDark])

  const dayNightClick = () => {
    setIsDark(!isDark)
  }

  return (
    <div className='git'>
      <span>lanelps </span>
      <button onClick={dayNightClick} tabIndex={0}>
        {branch}
      </button>
      <span> website</span>
    </div>
  )
}
