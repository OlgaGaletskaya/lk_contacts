import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Context } from '..'

const NavBar: React.FC = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color: 'white'}} to={'#'}> КОНТАКТЫ </NavLink>
            <Nav className="ml-auto">
                {user.userId ?
                    <Button variant='outline-light' onClick={() => user.logout()} >Выйти</Button>                
                    :
                    <Button variant='outline-light'>Войти</Button> 
                }
                
            </Nav>
            </Container>
        </Navbar>
    )
})

export default NavBar