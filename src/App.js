import React from "react"

import Talking from "./assets/talking.png"
import Right from "./assets/right.png"

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button } from "./styles"

const App = () => {
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
      </ContainerItems>
    </Container>
  );
}

export default App