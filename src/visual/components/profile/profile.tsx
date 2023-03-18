import React, { ReactElement } from "react"

import { Avatar, Box, SxProps, Theme, Typography } from "@mui/material"

import { Profile } from "../../../business/security/users/profile"

import { format } from "date-fns"

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
      <Avatar sx={avatarSettings()}>
        <Typography variant="h4" color="text.primary">
          {profile.sigla}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {profile.fullName}
      </Typography>
      <Typography variant="body1" color="text.primary">
        {format(new Date(), "PPPP")}
      </Typography>
    </Box>
  )
}

const avatarSettings = (): SxProps<Theme> => {
  return {
    width: "96px",
    height: "96px",
    backgroundColor: "primary.main",
    marginBottom: "16px",
  }
}
