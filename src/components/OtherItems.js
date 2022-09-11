import React, { useEffect, useState } from 'react'
import {Container, Button, Card, Row} from 'react-bootstrap'
import SingleItem from './SingleItem'
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'



const OtherItems = ({setsingleitem}) => {

  const nav = useNavigate()
  const random = useSelector(state => state.items.value.randomItems)  


 function openItem (id, item){
  nav("/product/" + id)
  setsingleitem(item)
}



  return (
   <Container>
    <Row xs={1} md={2} lg={4} className=" bg-succes">
         
    {random && random.map((x,i) => (
        <SingleItem item={x} openItem={() => openItem(x.id, x)}/>
    ))}
    </Row>
   </Container>
  )
}

export default OtherItems