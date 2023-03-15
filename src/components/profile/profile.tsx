import React, { ReactElement } from "react"

import { Avatar, Box, SxProps, Theme, Typography } from "@mui/material"

import { Profile } from "../../business/security/users/profile"

export type ProfileUXPropTypes = { profile: Profile }

export function UXProfile(data: ProfileUXPropTypes): ReactElement {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar sx={avatarTheme()}>
        <Typography variant="h4" color="text.primary">
          {data.profile.sigla}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${data.profile.firstName}`}
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
