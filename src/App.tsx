
import React, { FC, ReactElement } from "react"

import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

import { customTheme } from "./theme/customTheme"

import { DashBoard } from "./pages/dashboard/dashboard"

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <DashBoard/>
    </ThemeProvider>
  )
}

export default App
