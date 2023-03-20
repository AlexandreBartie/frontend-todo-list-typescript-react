import React, { ReactElement } from "react"

import { Box } from "@mui/material"

import { Task } from "../../../../business/core/task"

export type IUXTaskCard = { task: Task }

export function UXTaskCard(props: IUXTaskCard): ReactElement {
  const { task } = props

  return (
    <>
      <Box>{task.title}</Box>
    </>
  )
}
