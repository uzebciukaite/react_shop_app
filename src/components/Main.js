import React from 'react'
import { Button } from 'react-bootstrap'

const Main = () => {
  return (
    <div className=' bg w-100 d-flex my-5 mainMedia'>
      <div className='maincont w-50 '>
    <img className='h-100 w-100 rounded' src="https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      <div className='w-50 p-5 d-flex flex-column justify-content-center mainBgColor'>
<h2 className='text-light'>We offer exceptional quality with affordable price.</h2>
        <h4 className=' w-50 fs-5 py-3'>Want to get notified about latest sales? Subscribe!</h4>
        
        <div class="input-group mt-5">
        <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <Button className='bg-gray border-0' >Subscribe</Button>
        
      </div>
      </div>
      
    </div>
  )
}

export default Main