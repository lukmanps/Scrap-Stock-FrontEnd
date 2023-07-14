import { Typography } from '@mui/material'
import React from 'react'

const ErrorText = (props) => {
  return (
    <Typography variant='body' color={'red'} sx={{fontSize: '0.8rem'}}>
        {props.children}
    </Typography>
  )
}

export default ErrorText