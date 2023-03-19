import React, { ReactElement } from "react"

import { Avatar, Box, SxProps, Theme, Typography } from "@mui/material"

export type UXTaskCounter_PropTypes = { title: string; count: number, color: string }

export function UXTaskCounter(props: UXTaskCounter_PropTypes): ReactElement {
  const { title, count, color } = props

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar sx={avatarSettings(color)}>
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {title}
        </Typography>
      </Box>
    </>
  )
}

const avatarSettings = (color: string): SxProps<Theme> => {
  return {
    backgroundColor: "transparent",
    width: "96px",
    height: "96px",
    marginBottom: "16px",
    border: "5px solid",
    borderColor: color
  }
}
