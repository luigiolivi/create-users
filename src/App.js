import React from "react"

import Talking from "./assets/talking.png"
import Right from "./assets/right.png"

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button } from "./styles"

const App = () => {
  const users = [
    { id: Math.random(), name: "Luigi", age: 18 },
    { id: Math.random(), name: "Carlos", age: 19}
  ];

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
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App