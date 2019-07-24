import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NewTodo from './NewTodo'

const HomePage = () => (
  <Container>
    <h1>Home</h1>
    <NewTodo />
  </Container>
)

export default HomePage
