import React, { ReactElement } from "react"

import { Box, Typography } from "@mui/material"
import { UXTaskForm_Title } from "./TaskForm_Title"
import { UXTaskForm_Description } from "./TaskForm_Description"

import { TaskForm } from "./TaskFormController"

import { Stack } from "@mui/system"
import { UXTaskForm_Date } from "./TaskForm_Date"

export type UXTaskForm_PropTypes = { form: TaskForm }

export function UXTaskForm(props: UXTaskForm_PropTypes): ReactElement {
  const { form } = props

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
        <UXTaskForm_Title form={form} />
        <UXTaskForm_Description form={form} />
        <UXTaskForm_Date form={form} />
      </Stack>
    </Box>
  )
}
