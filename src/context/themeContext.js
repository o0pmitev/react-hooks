import React from 'react'

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      mode: false
    }
  }

  changeTheme = () => {
        this.setState(prevState => {
          return {
            mode: !prevState.mode
          }
        })
  }

  render() {
    return(
      <Provider value={{theme: this.state.mode === false ? 'light' : 'dark', changeTheme: this.changeTheme}}>
        {this.props.children}
      </Provider>
    )
  }
}
export {ThemeContextProvider, Consumer as ThemeContextConsumer}
