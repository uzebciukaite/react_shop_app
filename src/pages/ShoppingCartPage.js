import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SingleItemCart from '../components/SingleItemCart'
import { deletefromChart } from '../features/chart'
import {Container, Table, Button} from 'react-bootstrap'


const ShoppingCartPage = () => {
const cartitems = useSelector(state => state.chart.value.chartItems)  
const totalprice = useSelector(state => state.chart.value.totalPrice)
const dispatch = useDispatch() 


function deleteItem(index){

    const deleteditem = {
        item: cartitems[index],
        array: [...cartitems].filter((x, i) => i !== index)
    }
     
   

dispatch(deletefromChart(deleteditem))

}

  return (
    <>
    <Container className='d-flex py-5 gap-5 cart'>
      {cartitems.length > 0 ? (
        <Table responsive="md" className="rounded bg-light tableMedia"  >
          <thead className=' w-100' >
            <tr>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col">Quantity</th>
              <th scope="col">Single</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody className=''>
            {cartitems.map((x, i ) => <SingleItemCart item={x} deleteItem={() => deleteItem(i)} />)}
            
          </tbody>
       </Table>
      )
    :
    (<div className='w-75'>
       <p>Your cart is empty.</p>
    </div>
     
    )}
        
       <Container className='w-25 bg-light rounded h-100 d-flex flex-column py-5 justify-content-around'>  
         
         <div className='d-flex justify-content-between'>
           <p> Cart price:</p>
           <p className='fw-bold'> {totalprice.toFixed(2)} EUR</p>
         </div>
         <div className='d-flex justify-content-between'>
           <p>Delivery: </p>
           <p >0.00 EUR</p>
         </div>
         <div className='d-flex justify-content-between'>
           <p>In total: </p>
           <p className='fw-bold'>{totalprice.toFixed(2)} EUR</p>
         </div>
        
        
        
         <Button className='btn-color'> Go to checkout</Button>
       </Container>
    </Container>

      
    
</>
  )
}

export default ShoppingCartPage