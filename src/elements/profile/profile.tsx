import React, { ReactElement } from "react"

import { Avatar, Box, SxProps, Theme, Typography } from "@mui/material"

export const Profile = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar sx={avatarTheme()}>
        <Typography variant="h4" color="text.primary">
          AB
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome, Alexandre
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal todo-list
      </Typography>
    </Box>
  )
}

const avatarTheme = (): SxProps<Theme> => {
  return {
    width: "96px",
    height: "96px",
    backgroundColor: "primary.main",
    marginBottom: "16px",
  }
}
