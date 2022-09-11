
import React from 'react'
import { Card, Col } from 'react-bootstrap'

const SingleItem = ({item, openItem}) => {
  return (
   <Col>
 <Card onClick={openItem} className="w-100 d-flex flex-center cusstomBoxStyle customCardAllProducts mb-4 hover ">
    <Card.Img className='pt-2' style={{width: "100%", height: "35%", minHeight: "150px"} } src={item.image}/>  
    <Card.Body className='w-100 h-75'>
    <Card.Title className='text-center fw-bold'>
      
       <p className='w-75 m-auto'>{item.name}</p>
      
      </Card.Title>
    <Card.Text className=' d-flex flex-column justify-content-center' >
           

            {item.discount === true ? 
      ( 
      <div className='d-flex flex-column gap-2'>
        <div className='d-flex justify-content-start gap-2 mx-auto'>
           <p className='text-secondary fs-6'><s>{item.withoutDiscount}€</s></p>
         <p className='text-danger fs-4 fw-bold'>{item.price}€</p>
        </div>
        <div className='bg-danger w-75 fs-6 text-center py-1 rounded mx-auto text-light'>Save {item.withoutDiscount - item.price} € !</div>

        
      </div>

      )
      :
      <p className='text-secondary fs-4 fw-bold text-center'>{item.price}€</p>
}
        </Card.Text>
    </Card.Body>
 </Card>
    </Col>
  )
}

export default SingleItem