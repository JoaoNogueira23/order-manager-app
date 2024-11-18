import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { Box } from "@mui/material"
import  {RouterProvider} from 'react-router-dom'
import router from "./router"
import { SnackBarProvider } from "./components/SnackBar"

import { ThemeProvider } from "@emotion/react"
import useAppContext from "./hooks/useAppContext"
import darkPalette from "./styles/darkPallet"
import lightPalette from "./styles/lightPallet"
import typography from "./styles/typography"

function App() {

  const {darkMode} = useAppContext()


  return (
      <ThemeProvider 
      theme={responsiveFontSizes(createTheme({
        palette: darkMode ? darkPalette : lightPalette,
        typography,
      }))} 
      >
        <SnackBarProvider>
            <RouterProvider router={router}/>
        </SnackBarProvider>
      </ThemeProvider>
  )
}

export default App
