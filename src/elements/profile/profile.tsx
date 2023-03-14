import React, { FC, ReactElement } from "react"

import { Avatar, Box, SxProps, Theme, Typography } from "@mui/material"

interface IUXProfile {
  name: string,
}

// export type ProfileUXPropTypes = { data: Profile }

// export function UXProfile({ props: ProfileUXPropTypes }): JSX.Element {

export const UXProfile: FC<IUXProfile> = (props): ReactElement => {

  function partsName(): string[] {
    return props.name.trim().split(/\s+/)
  }

  function partName(index: number): string {
    return partsName()[index-1]
  }

  function firstName(): string {
    return partName(1)
  }

  function lastName(): string {
    return partName(partsName.length)
  }

  function sigla(): string {
    console.log(lastName())
    return 'xx'
  }

    return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar sx={avatarTheme()}>
        <Typography variant="h4" color="text.primary">
          {sigla()}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${firstName()}`}
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
