import React, { ReactElement } from "react"

import { Box, Button } from "@mui/material"

import { IWebSwitch, WebSwitch } from "../../generic/WebSwitch"

import { IUXTaskCard_Master } from "./TaskCard"

import { Task } from "../../../../business/base/task"

export function UXTaskCard_Footer(props: IUXTaskCard_Master): ReactElement {
  const { task } = props

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
      >
        <WebSwitch {...switchSettings(props)} />
        <Button
          variant="contained"
          size="small"
          color={getColorButton(task)}
          onClick={props.action.onMakeDone}
          sx={{ color: getColorFontButton(task) }}
        >
          {getTitleButton(task)}
        </Button>
      </Box>
    </>
  )
}

type ColorButton =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"

const switchSettings = (props: IUXTaskCard_Master): IWebSwitch => {
  const { task } = props
  return {
    label: task.status.name,
    checked: task.isDoing || task.isDone,
    disabled: task.isDone,
    color: task.status.colorBase,
    onChange: props.action.onStatusChange,
  }
}

const getTitleButton = (task: Task): string => {
  if (task.isDone) return "REVERT DONE"
  return "MAKE DONE"
}

const getColorButton = (task: Task): ColorButton => {
  if (task.isDone) return "warning"
  return "success"
}

const getColorFontButton = (task: Task): string => {
  if (task.isDone) return "#000000"
  return "#ffffff"
}
