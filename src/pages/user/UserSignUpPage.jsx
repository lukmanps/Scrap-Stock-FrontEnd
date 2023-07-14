import React from 'react'
import { ThemeProvider } from '@mui/material'
import GlobalTheme from '../../Theme/GlobalTheme'
import Signup from '../../components/user/signup'
import UserNavBar from '../../components/NavBar/UserNavBar'

 function UserSignUp() {
  return (
    <div style={{overflow: 'hidden'}}>
      <ThemeProvider theme={GlobalTheme}>
        <UserNavBar button={'Login'} />
        <Signup/>
      </ThemeProvider>
    </div>
  )
}

export default UserSignUp;


