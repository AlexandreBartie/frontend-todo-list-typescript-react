import React, { ReactElement } from "react"

import { Avatar, Box, SxProps, Theme, Typography } from "@mui/material"




export const Profile = (): ReactElement => {

    return (
    <Box display="flex" flexDirection="column">
      <Avatar sx={avatarTheme()}>AB</Avatar>
      <Typography>Boa Noite</Typography>
    </Box>
  )
}

const avatarTheme = () : SxProps<Theme> => {
    return {
        width: '96px',
        height: '96px',
        backgroundColor: 'primary.main',
        marginBottom: '16px'
      }
}

