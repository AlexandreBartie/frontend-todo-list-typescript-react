import React, { ReactElement, useState } from "react"

import { Box, SxProps, Theme } from "@mui/material"

import { Task } from "../../../../business/base/task"
import { UXTaskCard_Header } from "./TaskCard_Header"
import { UXTaskCard_Description } from "./TaskCard_Description"
import { UXTaskCard_Footer } from "./TaskCard_Footer"

export type IUXTaskCard = {
  task: Task
  action?: {
    onnStatusChange?: () => void
    onnMakeDone?: () => void
  }
}

export function UXTaskCard(props: IUXTaskCard): ReactElement {
  const { task } = props

  const [status, setStatus] = useState(task.statusId)

  function statusChange() {
    task.setChange()
    refreshCard()
  }

  function makeDone() {
    task.setDone()
    refreshCard()
  }

  const refreshCard = () => {
    setStatus(task.statusId)
  }

  const taskCard: IUXTaskCard = {
    task: task,
    action: { onnStatusChange: statusChange, onnMakeDone: makeDone },
  }

  return (
    <>
      <Box
        key={status}
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
