import React, {useState} from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { FaShoppingCart, FaBed, FaChair } from 'react-icons/fa';

const Toolbar = () => {
const quantity= useSelector(state => state.chart.value.quantity)
const [clicked, setClicked] = useState()
    


  return (

       <Navbar sticky="top"  expand="md" className='bg-gray ' >
            <Container>
           <Navbar.Brand as={Link} to="/react_shop_app">
               <FaBed className='fs-1 text-light'/>
                <FaChair className='fs-1 text-light'/>
            </Navbar.Brand>    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
          <Nav className=" d-flex w-100 justify-content-end gap-5 ">
            <Nav.Link className='text-light fw-bold' as={Link} to="/react_shop_app">Home</Nav.Link>
            <Nav.Link className='text-light fw-bold' as={Link} to="/shop">Shop</Nav.Link>            
            <Button className='btn bg-danger border-danger'  as={Link} to="/cart" > 
            <FaShoppingCart/>  
             ({quantity})
             </Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

  )
}

export default Toolbar