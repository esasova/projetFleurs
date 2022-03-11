import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../style/Layout.css'
import { useEffect, useState } from 'react';


function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <div>
      <Banner />
      <div className='lmj-layout-inner'>
      <Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <ShoppingList cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
