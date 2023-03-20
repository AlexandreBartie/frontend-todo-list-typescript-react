import React, { ReactElement } from "react"

import { Box, Typography } from "@mui/material"

import { IUXTaskCard } from "./TaskCard"

export function UXTaskCard_Description(props: IUXTaskCard): ReactElement {
  const { task } = props

  return (
    <>
      <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
        <Box>
          <Typography>{task.description}</Typography>
        </Box>
      </Box>
    </>
  )
}
