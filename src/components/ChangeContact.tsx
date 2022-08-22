import { observer } from 'mobx-react-lite'
import React, { useContext, useMemo, useState } from 'react'
import { Alert, Button, Card, Container, Form, Row } from 'react-bootstrap'
import { Context } from '..'

const ChangeContact = observer(() => {
    const {contact} = useContext(Context)
    const {user} = useContext(Context)
    const moreAboutContact = contact._contact.filter(e => e.id === contact._moreAboutContact)[0]
    const [changeContact, setChangeContact] = useState(moreAboutContact)
    const [error, setError] = useState(false)
    useMemo(()=>{
        setChangeContact(moreAboutContact)
        if(moreAboutContact.id === 0){
            setChangeContact({...changeContact, id: Date.now(), userId: user._userId})
        }
    }, [moreAboutContact])
    const saveChanges = () => {
        
        if (changeContact.name === '' || changeContact.surname === '' ){
            setError(true)
        }
        else 
        {
            if (moreAboutContact.id !== 0 ){
                contact.deleteContact(moreAboutContact.id)
            }
            contact.addContact(changeContact)
            contact.changeMoreAboutContact(changeContact.id)
            contact.setChangeContact(false)
            setError(false)
        }
    };

  return (
    <Container>
        <Card>
            <Card.Header className='' style={{display:'flex', justifyContent:'center', padding:'5px'}}> 
                <Card
                bg='primary'
                style={{
                    borderRadius:'50%', 
                    color: 'white', 
                    width:'60px',
                    height:'60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                { moreAboutContact.id === 0 ?
                <Card.Text style={{fontSize:'36px', paddingBottom: '8px'}}>+</Card.Text>:
                <Card.Text>
                  {moreAboutContact.name[0].toUpperCase()}{moreAboutContact.surname[0].toUpperCase()} 

                </Card.Text>
                }
                
                </Card >
            </Card.Header>
            
            <Card.Body>
            <Form>
                
                <Form.Control
                    value={changeContact.name}
                    onChange = {e => setChangeContact({...changeContact, name: e.target.value})}
                    placeholder='Имя'
                />
                <Form.Control
                    value={changeContact.surname}
                    onChange = {e => setChangeContact({...changeContact, surname: e.target.value})}
                    className='mt-1'
                    placeholder='Фамилия'
                />
                <Form.Control
                    value={changeContact.number}
                    onChange = {e => setChangeContact({...changeContact, number: e.target.value})}
                    className='mt-1'
                    placeholder='Номер телефона'
                />
                <Form.Control
                    value={changeContact.email}
                    onChange = {e => setChangeContact({...changeContact, email: e.target.value})}
                    className='mt-1'
                    placeholder='Почта'
                />

                <Row className='d-grid gap-2 mt-3'>
                {
                    error ?
                    <Alert variant='danger' className='p-2'>
                    Заполните поля
                    </Alert>
                    :
                    null
                }
          
                <Button variant='outline-primary' onClick={saveChanges}>Сохранить</Button>
                <Button variant='outline-primary' onClick={()=>contact.setChangeContact(false)}>Отменить</Button>
                </Row>
            </Form>
            </Card.Body>
            
        </Card>
    </Container>
  )
})

export default ChangeContact