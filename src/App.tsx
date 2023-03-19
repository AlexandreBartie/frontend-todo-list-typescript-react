
import React, { FC, ReactElement } from "react"

import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

import { customTheme } from "./visual/theme/customTheme"

import { UXTaskPage} from "./visual/pages/TaskPage/TaskPage"

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <UXTaskPage/>
    </ThemeProvider>
  )
}

export default App
