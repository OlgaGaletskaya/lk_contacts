import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'

const MoreAboutContact = observer(() => {
    const {contact} = useContext(Context)
    const moreAboutContact = contact._contact.filter(e => e.id === contact._moreAboutContact)[0]
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
                <Card.Text>
                  {moreAboutContact.name[0].toUpperCase()}{moreAboutContact.surname[0].toUpperCase()} 
                </Card.Text>
                
                </Card >
            </Card.Header>
            
            <Card.Body>
                <Card.Title>{moreAboutContact.name} {moreAboutContact.surname}</Card.Title>
                
                    <Row>
                        <Col sm={1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#0d6efd" className="bi bi-telephone" viewBox="0 0 16 16" style={{marginRight:'5px'}}>
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg> 
                        </Col>
                        <Col>
                        {moreAboutContact.number}
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col sm={1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#0d6efd" className="bi bi-envelope-open" viewBox="0 0 16 16" style={{marginRight:'5px'}}>
                            <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"/>
                        </svg>
                        </Col>
                        <Col>
                        {moreAboutContact.email}
                        </Col>
                    </Row>
                    <Row className='d-grid gap-2 mt-3'>
                    <Button variant='outline-primary' onClick={()=>contact.setChangeContact(true)}>Редактировать</Button>
                    <Button variant='outline-primary' onClick={()=>contact.deleteContact (contact._moreAboutContact)}>Удалить</Button>
                    </Row>
                
            </Card.Body>

        </Card>
    </Container>
  )
})

export default MoreAboutContact