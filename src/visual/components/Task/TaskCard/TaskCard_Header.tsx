import React, { ReactElement } from "react"

import { Box, Chip, Typography } from "@mui/material"

import { IUXTaskCard_Master } from "./TaskCard"

import { formatDate } from "../../../../library/date/formatDate"

export function UXTaskCard_Header(props: IUXTaskCard_Master): ReactElement {
  const { task } = props

  return (
    <>
      <Box display="flex" width="100%" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="h6">{task.title}</Typography>
        </Box>
        <Box>
          <Chip variant="outlined" label={formatDate(task.date)} />
        </Box>
      </Box>
    </>
  )
}
