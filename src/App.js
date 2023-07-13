import React, { useState } from "react"

import Talking from "./assets/talking.png"
import Right from "./assets/right.png"
import Trash from "./assets/trash.png"

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button, User } from "./styles"

const App = () => {
  const [users, setUsers] = useState([]);

  const addNewUser = () => {
    setUsers([])
  }

  return (
    <Container>
      <Image alt="logo-image" src={Talking} />

      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="right-arrow" src={Right}/></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={addNewUser}><img src={Trash} alt="trash-logo"/></button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App