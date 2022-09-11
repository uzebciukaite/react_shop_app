import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterItems } from '../features/items'
import { Container, Row, Button, Dropdown} from 'react-bootstrap'
import { sortItems } from '../features/items'

const Filter = () => {
    
  const colors = useSelector(state => state.items.value.colors)
  const categories = useSelector(state => state.items.value.categories)
  const priceRange = useSelector(state => state.items.value.priceRange)
  const dispatch = useDispatch() 

const sort = (type) => {
  dispatch(sortItems(type))
}


const filterProduct = (key, type) => {

    const filterValues = {
        key, type
    }
    console.log(filterValues)
    dispatch(filterItems(filterValues))
}

  return (
    <Container className='d-flex gap-4'>
      <Container className='d-flex gap-4'>
           {/* filter by category */}
        <Dropdown>
      <Dropdown.Toggle className='btn-color' id="dropdown-basic">
        Category 
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((x, i) => (
            <Dropdown.Item onClick={() => filterProduct("category", x.type)} key={i} href="#">{x.type} ({x.quantity})</Dropdown.Item>    
        ))}
       
      </Dropdown.Menu>
    </Dropdown>


        {/* filter by color */}
        <Dropdown>
      <Dropdown.Toggle className='btn-color' id="dropdown-basic">
        Color 
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {colors.map((x, i) => (
            <Dropdown.Item onClick={() => filterProduct("colors", x.color)} key={i} href="#">{x.color} ({x.quantity})</Dropdown.Item>    
        ))}
       
      </Dropdown.Menu>
    </Dropdown>


        {/* filter by price */}
        <Dropdown>
      <Dropdown.Toggle className='btn-color' id="dropdown-basic">
        Price 
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {priceRange.map((x, i) => (
            <Dropdown.Item onClick={() => filterProduct("price", x.range)} key={i} href="#">  {`${x.range[0]} - ${x.range[1]} €`} ({x.quantity}) </Dropdown.Item>    
        ))}
       
      </Dropdown.Menu>
    </Dropdown>
      </Container>
       



        {/* //Sort dropdown */}
        <Dropdown>
      <Dropdown.Toggle className='btn-color' id="dropdown-basic">
        Sort by
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => sort("hightoLow")} href="#/action-1">Price low to high</Dropdown.Item>
        <Dropdown.Item onClick={() => sort("lowtoHigh")} href="#/action-2">Price high to low</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    </Container>
  )
}

export default Filter