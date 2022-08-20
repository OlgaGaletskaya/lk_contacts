import { observer } from 'mobx-react-lite'
import React, { useContext, useMemo, useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { Context } from '..'
import ChangeContact from '../components/ChangeContact'
import ContactItem from '../components/ContactItem'
import MoreAboutContact from '../components/MoreAboutContact'

const Contacts = observer(() => {
  const {contact} = useContext(Context)
  const {user} = useContext(Context)
  const [search, setSearch] = useState('')
  const cont = contact.getUserContact(user._userId)
  const contacts = useMemo(() => {
      return( cont.filter(e => e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e.surname.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e.number.includes(search) ).sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1))
  }, [search, cont])
  return (
    <Container>
      <Card className='mt-2'>
      <Card.Header>
        <Row>
          <Col>
            <Container>
              <Row>Добро пожаловать</Row>
              <Row>Контактов в Вашем списке:  
                {contacts.length } </Row>
            </Container>
          </Col>
          <Col>
            <Container style={{display:'flex', justifyContent:'space-between'}}>
              <InputGroup className="ml-2" style={{width:'300px'}}>
                <InputGroup.Text id="basic-addon1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value = {search}
                  onChange = {e => setSearch(e.target.value)}
                />
              </InputGroup>
              <Button 
              style={{width: '150px'}}
              onClick={()=> {
                contact.setChangeContact(true)
                contact.changeMoreAboutContact(0)
              }}
              > 
              Создать контакт </Button>
            </Container>
          </Col>
        </Row>
      </Card.Header>
        <Row className='mt-2'>
          <Col sm={3}>
            {
              !contact.changeContact && contact._moreAboutContact ?
              <MoreAboutContact/>
              : null
            }
            {contact.changeContact ?
              <ChangeContact/>
              :null
            }
          </Col>
          <Col sm={9}>
            <Container >
              <Row className='mt-2 d-f' style={{alignItems: 'center', borderBottom: '1px solid gray', color:'grey'}}>
                <Col sm={1}></Col>
                <Col>Имя контакта </Col>
                <Col>Номер телефона </Col>
                <Col sm={2} className='align-self-end'>
                  <Row>
                    <Col style={{fontSize: '9px'}}>
                      Изменить
                    </Col>
                    <Col style={{fontSize: '10px'}}>
                      Удалить
                    </Col>
                  </Row>
                </Col>
              </Row>
              {contacts.map((contact, index) => 
                <ContactItem index={index+1} key={contact.id} id={contact.id} name={contact.name} surname={contact.surname} number={contact.number}/>
              )}
            </Container>
          </Col>
        </Row>
      </Card>
        
        
    </Container>
  )
})

export default Contacts