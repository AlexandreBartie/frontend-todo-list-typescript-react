import React, { ReactElement } from "react"

import { Box, Button } from "@mui/material"

import { IUXTaskCard } from "./TaskCard"
import { WebSwitch } from "../../generic/WebSwitch"

export function UXTaskCard_Footer(props: IUXTaskCard): ReactElement {
  const { task } = props




  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
      >
        <WebSwitch
          {...{
            label: task.status.name + ':' + task.status.id.toString(),
            value: task.status.isDoing
          }}

        />
        <Button variant='contained' color='success' size='small' sx={{color:'#ffffff'}}>{task.title}</Button>
      </Box>
    </>
  )
}