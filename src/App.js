import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUsername } from './redux/userReducer'
import './App.css'


export function App() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')

  const users = useSelector((state) => state.users.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="add-user">
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <button onClick={() => { dispatch(addUser({ id: users[users.length - 1].id + 1, name, username })) }}>Add User</button>
      </div>
      <div className="user-list">
        {users.map((user) => {
          return <div className="user-preview" key={user.id}>
            <h2> {user.name}</h2>
            <h3>{user.username}</h3>
            <input
              type="text"
              placeholder="new username..."
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }} >Update Username</button>
            <button onClick={() => { dispatch(deleteUser({ id: user.id })) }}> Delete User</button>
          </div>
        })}
      </div>

    </div >
  );
}


