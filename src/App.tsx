
import React, { FC, ReactElement } from "react"

import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

import { customTheme } from "./visual/theme/customTheme"

import { UXDashBoard } from "./visual/pages/Dashboard/Dashboard"

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <UXDashBoard/>
    </ThemeProvider>
  )
}

export default App
