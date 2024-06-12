import React from 'react'
import UserMangement from '@features/UserMangement/UserMangement'
import useGetData from "@hooks/useGetData";

function UserMangment() {
  useGetData("Roles", "Roles_Get_Modal");

  return (
   <UserMangement />
  )
}

export default UserMangment