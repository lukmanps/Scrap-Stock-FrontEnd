import React from 'react'
import { ThemeProvider } from '@mui/material'
import GlobalTheme from '../../Theme/GlobalTheme'
import Signup from '../../components/user/register/Signup'
import UserNavBar from '../../components/user/layout/user-navbar'

 function UserSignUp() {
  return (
    <div style={{overflow: 'hidden'}} id='user-body'>
      <ThemeProvider theme={GlobalTheme}>
        <UserNavBar button={'Login'} link={'login'}/>
        <Signup/>
      </ThemeProvider>
    </div>
  )
}

export default UserSignUp;


