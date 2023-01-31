import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartProvider } from './utils/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/cart" element = {<Cart />} />
            <Route exact path="/" element= {<Home />} />              
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
