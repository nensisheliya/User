import React, { createContext, useState } from 'react'

export let userdata =createContext({});

const User = ({children}) => {
let[User,setUser]=useState({});

 const handeleUser =(User)=>{
    setUser(User);
 }
 const handleLogout =()=>{
    setUser({});
 }
  return (
    <userdata.Provider value={{User,handeleUser,handleLogout}}>{children}</userdata.Provider>
  )
}

export default User
