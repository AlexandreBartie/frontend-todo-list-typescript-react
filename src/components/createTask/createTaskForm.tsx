import React, { ReactElement } from "react"

import { Box, Typography } from "@mui/material"
import { UXCreateTaskTitle } from "./createTaskTitle"
import { UXCreateTaskDescription } from "./createTaskDescription"

export function UXCreateTask(): ReactElement {
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
      <Typography variant="body1" color="text.primary">
        Create a Task
      </Typography>
      <UXCreateTaskTitle></UXCreateTaskTitle>
      <UXCreateTaskDescription></UXCreateTaskDescription>
    </Box>
  )
}
