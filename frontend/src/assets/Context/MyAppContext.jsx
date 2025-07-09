import React, { useState } from 'react'
import { createContext } from 'react'

export const MyContext = createContext(null)
const MyAppContext = ({children}) => {
  //  state for light and dark theme
  const [theme, setTheme] = useState('light')
  // state to check if it is dark or setLight
    const context = {
        theme,
        setTheme
    }
  return (
    <MyContext.Provider value={context}>
        {children}
    </MyContext.Provider>
  )
}

export default MyAppContext
