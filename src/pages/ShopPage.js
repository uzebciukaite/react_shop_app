import {React, useEffect} from 'react'
import SingleItem from '../components/SingleItem'
import { Container, Row} from 'react-bootstrap'
import {useNavigate} from "react-router-dom"
import { useSelector} from 'react-redux'
import Filter from '../components/Filter'


function ShopPage({setsingleitem}) {
const nav = useNavigate()
const allItems = useSelector(state => state.items.value.allProducts)
const filteredProducts = useSelector(state => state.items.value.filteredProducts)



useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

function openItem (id, item){
  nav("/product/" + id)
  setsingleitem(item)
}


  return (

    <Container className='d-flex flex-column mx-auto py-5'>

      <Filter/>

       <Container className='d-flex justify-content-center align-items-center m-auto py-5'>
        {filteredProducts.length > 0 ? (
            <Row xs={1} md={2} lg={4} className=" bg-succes w-100" >  
          {filteredProducts.map((x, i) => <SingleItem  item={x} key={i} openItem={() => openItem(x.id, x)}  /> )}
       </Row>
       )
      :
      (
         <Row xs={1} md={2} lg={4} className=" bg-succes w-100" >  
          {allItems.map((x, i) => <SingleItem  item={x} key={i} openItem={() => openItem(x.id, x)}  /> )}
       </Row> 
      )}
          
       </Container>
    </Container>
  )
}

export default ShopPage