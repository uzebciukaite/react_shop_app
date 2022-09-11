import React from 'react'
import {FaBed, FaChair, FaInstagram, FaFacebookF, FaTwitter} from 'react-icons/fa';
import {Navbar, Nav, Container, Button} from 'react-bootstrap'

const Footer = () => {

    
  return (
    <div className=' d-flex footer justify-content-around bg-gray'>
      <div className='d-flex w-25 flex-column align-items-center pt-5 text-light'>
<p className='text-danger'>All pictures are taken from sofa-lova.lt</p>
<div className='d-flex flex-column'>
    <p>fur@furniture.com</p>
    <p>+123 456 789</p>
</div>

      </div>
      <div className='d-flex w-25 flex-column align-items-center pt-5 text-light'>
        
          <p>Useful links</p>
       
      <div className='d-flex flex-column gap-3 text-center'>
         <a className='text-light' href="#"> About us</a>
        <a className='text-light' href="#"> Contact us</a>
        <a className='text-light' href="#"> Return policy</a>
        <a className='text-light' href="#"> FAQ</a>
        <a className='text-light' href="#"> Delivery</a>
      </div>
       
      </div>
      
        <div className='headerIcons d-flex flex-column align-items-center pt-5 w-25 gap-3 text-light'>
            
            <p>Follow us:</p>
            
            
            <Container className=' border border-secondary flex-center fs-3 rounded m-0 p-0'><FaInstagram /></Container>
            <Container className=' border border-secondary flex-center fs-3 rounded m-0 p-0'><FaFacebookF /></Container>
            <Container className=' border border-secondary flex-center fs-3 rounded m-0 p-0'><FaTwitter/></Container>
            
            
           
        </div>
      
       
            
    </div>
  )
}

export default Footer