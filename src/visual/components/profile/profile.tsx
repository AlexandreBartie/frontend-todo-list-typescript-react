import React, { ReactElement } from "react"

import { Avatar, Box, SxProps, Theme, Typography } from "@mui/material"

import { Profile } from "../../../business/security/users/profile"

export type UXProfile_PropTypes = { profile: Profile }

export function UXProfile(props: UXProfile_PropTypes): ReactElement {

  const { profile } = props

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar sx={avatarTheme()}>
        <Typography variant="h4" color="text.primary">
          {profile.sigla}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${profile.firstName}`}
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
