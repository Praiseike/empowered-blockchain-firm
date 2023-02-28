import React from 'react'
import useAuthContext from '../../services/Auth/useAuthContext';

function Dashboard() {
  const { user } = useAuthContext();
  if(!user)
    return <h1>You need to login to view this page</h1>
  else{
    return (
      <div>welcome to the dashboard {user.name}</div>
    )    
  }
}

export default Dashboard