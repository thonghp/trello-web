import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* chuẩn hoá css, nó đồng bộ giữa các browser */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
