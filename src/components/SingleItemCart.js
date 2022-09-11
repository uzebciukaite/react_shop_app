import React from 'react'
import { useDispatch } from 'react-redux'
import { addToChart } from '../features/chart'
import {Button, Container} from 'react-bootstrap';


const SingleItemCart = ({item, deleteItem}) => {

 const dispatch = useDispatch()   

 function addOtherItem(){

    dispatch(addToChart(item))
}   




  return (
   <>
    <tr>
          <td scope="row">
            <Container className='d-flex align-items-center' >
              <img className='cartImg' src={item.image} alt="" /> 
              <h4 className='fs-6 mx-5'>{item.name}</h4>
            </Container>
          </td>
          <td> 
            <Container className='d-flex flex-column align-items-center justify-content-between gap-3 h-100 py-2 '>
            <Button className='btn-color cart-btns flex-center' onClick={deleteItem}> - </Button>
            <Button className='btn-color cart-btns flex-center' onClick={addOtherItem}> + </Button>
            </Container>
            

          </td>
          <td>{item.quantity}</td>
          <td>  {item.price}</td>
          <td>{item.totalPrice.toFixed(2)}</td>
    </tr>
</>
  )
}

export default SingleItemCart