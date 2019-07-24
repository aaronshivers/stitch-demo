import React from 'react'
import { Form, Button } from 'react-bootstrap'

const NewTodo = () => (
  <Form>
    <Form.Group>
      <Form.Label>New Todo</Form.Label>
      <Form.Control type="text" placeholder="todo..." />
    </Form.Group>
    <Button>Add Todo</Button>
  </Form>
)

export default NewTodo
