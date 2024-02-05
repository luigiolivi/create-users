import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'

import axios from "axios"

import People from "../../assets/people.png"
import Left from "../../assets/left.png"
import Trash from "../../assets/trash.png"

import H1 from '../../components/Title'
import ContainerItems from "../../components/ContainerItems"
import Button from "../../components/Button"
import { Container, Image, User } from "./styles"

function App() {
  const [users, setUsers] = useState([]);

  const history = useHistory()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("https://create-users-backend-production.up.railway.app/users")
      
      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`https://create-users-backend-production.up.railway.app/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goHomePage() {
    history.push("/")
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />

      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="trash-logo" /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goHomePage}><img alt ="left-arrow" src={Left} /> Voltar</Button>

      </ContainerItems>
    </Container>
  );
}

export default App
