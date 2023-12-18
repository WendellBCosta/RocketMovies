import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details/Details'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import themes from './styles/themes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)