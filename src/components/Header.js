import React from 'react'
import {ThemeContextConsumer} from '../context/themeContext'
import Button from './Button'

const Header = () => {
  return(

  <ThemeContextConsumer>
      {(context => (
          <header className={`${context.theme}-theme`}>
            <Button />
             <h1 className="header-text">{context.theme === "light" ? "Light" : "Dark"} Theme</h1>
          </header>
      ))}
  </ThemeContextConsumer>
    )
  }
  
  export default Header