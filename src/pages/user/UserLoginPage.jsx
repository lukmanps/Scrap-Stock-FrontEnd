import React from 'react'
import Login from '../../components/user/Login';
import UserNavBar from '../../components/user/NavBar/UserNavBar';

const UserLogin = () => {
  return (
    <div style={{overflow: 'hidden'}}>
      <UserNavBar button={'Register'} link={'signup'}/>
      <Login/>
    </div>
  )
}

export default UserLogin;