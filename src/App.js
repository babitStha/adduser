import React, { useState } from 'react';
import './App.css';
import AddUserForm from './components/AddUserForm';
import User from './components/User';
function App() {
  const [USERS, setUSERS] = useState([
    {
      id:"0",
      name:"Babeet Shrestha",
      age: "21",
    },
    {
      id:"1",
      name:"Muna Ghishing",
      age: "22",
    },
    
  ]);
  const addUserHandler =(user) =>{
    setUSERS(innitialUsers =>{
      return ([user, ...innitialUsers])
    })
  }
  const removeUserHandler = (index) =>{
    let temp_users = [...USERS]
    temp_users.splice(index, 1) 
    setUSERS(users =>{
      return temp_users
    })
  }
  return (
    <div className="App">
      <AddUserForm onAddUser ={addUserHandler}/>
      <User users={USERS} onRemoveUser={removeUserHandler} />
    </div>
  );
}

export default App;
