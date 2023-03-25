import React, { FC, ReactElement } from "react"

import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

import { customTheme } from "./visual/theme/customTheme"

import { UXTaskPage } from "./visual/pages/TaskPage/TaskPage"
import ErrorBoundary from "./visual/components/generic/WebError"

const App: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback='Hi !!!'>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <UXTaskPage />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
