import React from 'react'
import Login from '../../components/user/login/Login';
import UserNavBar from '../../components/user/layout/user-navbar';

const UserLogin = (props) => {
  return (
    <div style={{overflow: 'hidden'}}>
      <UserNavBar button={'Register'} link={'signup'}/>
      <Login/>
    </div>
  )
}

export default UserLogin;