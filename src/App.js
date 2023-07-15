import React, { useState, useRef } from "react"

import Talking from "./assets/talking.png"
import Right from "./assets/right.png"
import Trash from "./assets/trash.png"

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button, User } from "./styles"

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    setUsers([...users,
    {
      id: Math.random(),
      name: inputName.current.value,
      age: inputAge.current.value,
    }])
  }

  return (
    <Container>
      <Image alt="logo-image" src={Talking} />

      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel ref={inputName}>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel ref={inputAge}>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="right-arrow" src={Right} /></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img src={Trash} alt="trash-logo" /></button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App