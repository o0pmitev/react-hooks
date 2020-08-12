import React from 'react'
import Header from './components/Header'
import Game from './components/gameComponent/Game'
import {ThemeContextConsumer} from './context/themeContext'

function App() {
  return (
    <ThemeContextConsumer>
      {context => (
      <div className={`App ${context.theme}-theme`}>
        <Header/>
        <Game />
      </div>

      )}
    </ThemeContextConsumer>

  );
}

export default App;
