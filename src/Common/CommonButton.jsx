import React from 'react';
import Button from '@mui/material/Button';


export const CommonButton = ({children, color, disabled, size, variant, sx, type, onClick}) => {
  return (
        <Button
        variant = {variant}
        color = {color}
        disabled = {disabled}
        size = {size}
        sx = {sx}
        type={type}
        onClick={onClick}>

        {children}

        </Button>
  )
}
