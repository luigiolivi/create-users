import React, { useState, useEffect } from "react"

import axios from "axios"

import People from "../../assets/people.png"
import Left from "../../assets/left.png"
import Trash from "../../assets/trash.png"

import { Container, Image, ContainerItems, H1, Button, User } from "./styles"

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      
      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />

      <ContainerItems>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="trash-logo" /></button>
            </User>
          ))}
        </ul>

        <Button><img alt ="left-arrow" src={Left} /> Voltar</Button>

      </ContainerItems>
    </Container>
  );
}

export default App