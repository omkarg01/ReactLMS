import React from 'react'

const UserProfile = () => {
    let isLoggedIn = false;

    // { condition ? if true : if false }
  return (
    <div>{isLoggedIn ? <h1>UserProfile</h1>  : <h1>Login Page</h1> }</div>
  )
}

export default UserProfile