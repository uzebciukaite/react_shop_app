import './App.css';
import {React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import SingleProductPage from './pages/SingleProductPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import HomePage from './pages/HomePage';
import Toolbar from './components/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';



function App() {
const [getsingleitem, setsingleitem] = useState()
const [items, setItems] = useState([])





  return (



<div className="App"> 
<BrowserRouter>

<Toolbar/>
<Routes>
  
 <Route path="/shop" element={<ShopPage  setsingleitem={setsingleitem}/>}/>
 <Route path="/react_shop_app" element={<HomePage setsingleitem={setsingleitem}
 />}/>
 <Route path="/product/:id" element={<SingleProductPage getsingleitem={getsingleitem} setsingleitem={setsingleitem} items={items} setsingleitem={setsingleitem} />}/>
 <Route path="/cart" element={<ShoppingCartPage/>}/>

  
</Routes>
<Footer/>
</BrowserRouter>

  


</div>






    
  );
}

export default App;
