import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { I18nextProvider } from 'react-i18next'

import { Routes } from './routes'
import i18n from '../i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <Routes />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
