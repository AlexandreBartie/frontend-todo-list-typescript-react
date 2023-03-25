import React, { ReactElement } from "react"

import { Box, SxProps, Theme } from "@mui/material"

import { Task } from "../../../../business/base/task"
import { UXTaskCard_Header } from "./TaskCard_Header"
import { UXTaskCard_Description } from "./TaskCard_Description"
import { UXTaskCard_Footer } from "./TaskCard_Footer"

export type IUXTaskCard = {
  task: Task
  action?: {
    onStatusChange?: () => void
    onMakeDone?: () => void
  }
}

export function UXTaskCard(props: IUXTaskCard): ReactElement {
  const { task } = props

  function statusChange() {
    console.log('here#1')
    task.setChange()
    console.log('here#2')
    console.log(`onStatusChange: ${task.status.name}}`)
  }

  function makeDone() {
    task.setDone()

    console.log(`onMakeDone: ${task.status.name}`)
  }

  const taskCard = {
    task: task,
    action: { onStatusChange: statusChange, onMakeDone: makeDone },
  }

  return (
    <>
      <Box
        display="flex"
        width="100%"
        justifyContent="flex-start"
        flexDirection="column"
        mb={2}
        p={4}
        sx={taskCardSettings(task.priority.color)}
      >
        <UXTaskCard_Header {...taskCard} />
        <UXTaskCard_Description {...taskCard} />
        <UXTaskCard_Footer {...taskCard} />
      </Box>
    </>
  )
}

const taskCardSettings = (color: string): SxProps<Theme> => {
  return {
    width: "100%",
    backgroundColor: "background.paper",
    borderRadius: "28px",
    border: "1px solid",
    borderColor: color,
  }
}
