import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import { Context } from '..'
import Contacts from './Contacts';

export interface IuserLog {
  login:string;
  password:string;
}

const Auth = observer(() => {
  const {user} = useContext(Context)
  const {contact} = useContext(Context)
  const [userLog, setUserLog] = useState({login:'', password:''})
  const [error, setError] = useState(false)
  const login = () => {
    user.login(userLog.login, userLog.password)
    setUserLog({login:'', password:''})
    setError(true)
    contact.changeMoreAboutContact(0)
  }

  return (
    <Container 
    className='d-flex justify-content-center align-items-center'
    style={{height: window.innerHeight-100}}
    >
      <Card 
      style={{width: 400}} 
      className='p-5'
      >
        <h2 className='m-auto'>Авторизация</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            value={userLog.login}
            onChange = {e => setUserLog({...userLog, login: e.target.value})}
            className='mt-5'
            placeholder='Введите логин'
          />
          <Form.Control
            value={userLog.password}
            onChange = {e => setUserLog({...userLog, password: e.target.value})}
            type="password"
            className='mt-3 mb-2'
            placeholder='Введите пароль'
          />
          {
            error ?
            <Alert variant='danger' className='p-2'>
            Неверный логин и/или пароль
            </Alert>
            :
            null
          }
          
          
          <Button 
            className='mt-2 align-self-end'
            variant='outline-success'
            onClick={login}
          >
            Войти
          </Button>
        </Form>
      </Card>
      
    </Container>
  )
})

export default Auth