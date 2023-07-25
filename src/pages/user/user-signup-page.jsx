import React from 'react'
import { ThemeProvider } from '@mui/material'
import GlobalTheme from '../../Theme/GlobalTheme'
import Signup from '../../components/user/signup'
import UserNavBar from '../../components/user/layout/user-navbar'

 function UserSignUp() {
  return (
    <div style={{overflow: 'hidden'}}>
      <ThemeProvider theme={GlobalTheme}>
        <UserNavBar button={'Login'} link={'login'}/>
        <Signup/>
      </ThemeProvider>
    </div>
  )
}

export default UserSignUp;


