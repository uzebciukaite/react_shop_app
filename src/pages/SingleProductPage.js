import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToChart } from '../features/chart'
import { useNavigate } from 'react-router'
import {Container, Button} from 'react-bootstrap'
import OtherItems from '../components/OtherItems'
import { randomItems } from '../features/items'


const SingleProductPage = ({getsingleitem, setsingleitem}) => {
const nav = useNavigate()
const dispatch = useDispatch()

useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);



  function addItemtoChart(){
const newaddeditem = {
    id: getsingleitem.id,
    image: getsingleitem.image,
    name: getsingleitem.name,
    price: getsingleitem.price,
    totalPrice: getsingleitem.price,
    quantity: 1

}

        dispatch(addToChart(newaddeditem))
    }

    function gobacktopreviouspage(){
        nav("/shop")
        setsingleitem({})
    }

 useEffect(() => {

    dispatch(randomItems(getsingleitem))
 },[getsingleitem])
    
 
    
  return (
<div>

    <Container className='w-100 h-100 py-5 d-flex flex-column '>
      <h4 className='mb-4 fw-bold'>More about the product:</h4>
      <Container className='d-flex h-100 mb-5 singlePageMedia'>
          <Container className='w-50'>
          <img className='w-100' src={getsingleitem.image} alt="" />
        </Container>
        <Container className='w-50 h-100 d-flex flex-column py-4 my-auto'>
          <h3>{getsingleitem.name}</h3>
          <p>{getsingleitem.description}</p>
          <p>Left items:  {getsingleitem.itemsleft}</p>
          <div className='d-flex gap-3' style={{height: "30px"}}> Color: 
            <div className='rounded-circle' style={{backgroundColor: getsingleitem.color, width: "30px", height: "30px"}}></div>
          </div>
          {getsingleitem.discount === true ? (
             <div className='flex-center flex-column'>
            <div className='d-flex gap-2'>
               <p className='text-secondary fs-6'> <del>{getsingleitem.withoutDiscount}€</del></p>
                <p className='text-danger fs-4 fw-bold'>{getsingleitem.price}€</p> 
            </div>
            
            <div className='bg-danger w-75 fs-4 text-center py-1 rounded mx-auto text-light'>Save {getsingleitem.withoutDiscount - getsingleitem.price} € !</div>
          </div> 
          )
          :
          (
             <p className='text-danger fs-4 fw-bold text-center my-4'>{getsingleitem.price}€</p>  
          )}
          
           
         <Container className='d-flex justify-content-center align-items-end my-4 gap-3'>
            <Button className='btn-color' onClick={addItemtoChart}>ADD TO CART</Button>
            <Button className='btn-color' onClick={gobacktopreviouspage}>GO BACK</Button>
        </Container>
        </Container>
      </Container>
        
       
    
    <Container>
        <h4 className=' mb-4 fw-bold'>Other items you may like:</h4>
        <OtherItems setsingleitem={setsingleitem}/>
    </Container>
    </Container>


</div>

    
  )
}

export default SingleProductPage