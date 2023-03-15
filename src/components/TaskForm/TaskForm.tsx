import React, { ReactElement } from "react"

import { Box, Typography } from "@mui/material"
import { UXTaskForm_Title } from "./TaskForm_Title"
import { UXTaskForm_Description } from "./TaskForm_Description"

import { Task } from "../../business/core/task"
import { Stack } from "@mui/system"

export type UXTaskForm_PropTypes = { task: Task }

export function UXTaskForm(): ReactElement {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Typography variant="body1" color="text.primary">
          Create a Task
        </Typography>
        <UXTaskForm_Title />
        <UXTaskForm_Description />
      </Stack>
    </Box>
  )
}
