import React from 'react'
import Login from '../../components/user/Login';
import UserNavBar from '../../components/NavBar/UserNavBar';

const UserLogin = () => {
  return (
    <div style={{overflow: 'hidden'}}>
      <UserNavBar button={'Register'}/>
      <Login/>
    </div>
  )
}

export default UserLogin;