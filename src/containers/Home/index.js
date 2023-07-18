import React, { useState, useRef } from "react"

import axios from "axios"

import Talking from "../../assets/talking.png"
import Right from "../../assets/right.png"

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button } from "./styles"

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    })

    setUsers([...users, newUser])
  }

  return (
    <Container>
      <Image alt="logo-image" src={Talking} />

      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel >Nome</InputLabel>
        <Input placeholder="Nome" ref={inputName} />

        <InputLabel >Idade</InputLabel>
        <Input placeholder="Idade" ref={inputAge} />

        <Button onClick={addNewUser}>Cadastrar <img alt="right-arrow" src={Right} /></Button>
      </ContainerItems>
    </Container>
  );
}

export default App