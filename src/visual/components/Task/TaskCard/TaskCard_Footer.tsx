import React, { ReactElement } from "react"

import { Box, Button } from "@mui/material"

import { IUXTaskCard } from "./TaskCard"
import { WebSwitch } from "../../generic/WebSwitch"

export function UXTaskCard_Footer(props: IUXTaskCard): ReactElement {
  const { task } = props

  const titleButton = (): string => {
    if (task.isDone) return "REVERT DONE"
    return "MAKE DONE"
  }

  const colorButton = (): 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' => {
    if (task.isDone) return "warning"
    return "success"
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
      >
        <WebSwitch
          {...{
            label: task.status.name,
            checked: task.isDoing,
            color: task.status.colorBase,
          }}
        />
        <Button
          variant="contained"
          size='small'
          color={colorButton()}          
        >
          {titleButton()}
        </Button>
      </Box>
    </>
  )
}
