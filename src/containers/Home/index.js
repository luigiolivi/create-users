import React, { useState, useRef } from "react"
import axios from "axios"
import { useHistory } from 'react-router-dom'

import Talking from "../../assets/talking.png"
import Right from "../../assets/right.png"

import H1 from '../../components/Title'
import ContainerItems from "../../components/ContainerItems"
import Button from "../../components/Button"
import { Container, Image, InputLabel, Input } from "./styles"

function Users() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  const history = useHistory()

  async function addNewUser() {
    const { data: newUser } = await axios.post("https://create-users-backend-production.up.railway.app/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    })

    setUsers([...users, newUser])

    
    history.push("/users")
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

export default Users
