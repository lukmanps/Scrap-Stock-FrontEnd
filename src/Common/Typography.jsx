import React from 'react'

export const Typography = ({children, variant, align, sx}) => {
  return (
    <Typography 
    variant = {variant}
    align = {align}
    sx = {sx}>
        {children}
    </Typography>
  )
}
