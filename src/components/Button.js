import React from 'react'
import {ThemeContextConsumer} from '../context/themeContext'

const Button = () => {
  return (
    <ThemeContextConsumer>
      {context => (
        <button onClick={context.changeTheme}className={`${context.theme}-theme`}>{context.theme === 'light' ? '🌜' : '🌞'}</button>
      )}
    </ThemeContextConsumer>
  )
}

export default Button