import React, {useState} from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {

  
  const usersData = [
    {id: 1, name:'tania', username:'aaa'},
    {id: 2, name:'craof', username:'bbb'},
    {id: 3, name:'ben', username:'bbb'},
  ]
  
  const [users, setUsers] = useState(usersData)
  
  const addUser = (user) => {
    user.id = user.length + 1
    setUsers([...users, user])
  }

  return(
    <div className="container">
      <h1>Crud with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View USer</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App;
