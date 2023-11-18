import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from '../authSlice'
import { Navigate } from 'react-router-dom'
function Protected({children}){
  const user = useSelector(selectLoggedInUser)
  if(!user){
    return <Navigate to="/login" replace={true}></Navigate>     // if user not found then <Navigate></Navigate> is tag that comes from react-router-dom to redirect to the login page.
  }
  return children
}

export default Protected
