import React, { ReactElement } from "react"

import { Avatar, Box, SxProps, Theme, Typography } from "@mui/material"

export type UXTaskCounter_PropTypes = { label: string; value: number }

//export function UXTaskCounter(props: UXTaskCounter_PropTypes): ReactElement {

export function UXTaskCounter(): ReactElement {
  // const { label, value } = props

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar sx={avatarSettings()}>
          <Typography color="#ffffff" variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          Titsle
        </Typography>
      </Box>
    </>
  )
}

const avatarSettings = (): SxProps<Theme> => {
  return {
    width: "96px",
    height: "96px",
    marginBottom: "16px",
    border: "5px solid",
    bordercolor: "warning.light",
    backgroundColor: "transparent",
  }
}
