import React, { ReactElement } from "react"

import { Box, SxProps, Theme } from "@mui/material"

import { Task } from "../../../../business/core/task"
import { UXTaskCard_Header } from "./TaskCard_Header"
import { UXTaskCard_Description } from "./TaskCard_Description"
import { UXTaskCard_Footer } from "./TaskCard_Footer"

export type IUXTaskCard = { task: Task }

export function UXTaskCard(props: IUXTaskCard): ReactElement {
  const { task } = props

  return (
    <>
      <Box
        display="flex"
        width="100%"
        justifyContent="flex-start"
        flexDirection='column'
        mb={2}
        p={4}
        sx={taskCardSettings()}
      >
        <UXTaskCard_Header task={task} />
        <UXTaskCard_Description task={task} />
        <UXTaskCard_Footer task={task} />
      </Box>
    </>
  )
}

const taskCardSettings = (): SxProps<Theme> => {
  return {
    width: "100%",
    backgroundColor: "background.paper",
    borderRadius: "28px",
    border: "1px solid",
    borderColor: "error.light",
  }
}
