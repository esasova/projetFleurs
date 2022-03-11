import '../style/Cart.css'
import { useState, useEffect } from 'react'
function Cart ({cart, updateCart, isOpen, setIsOpen}) {
    const total = cart.length > 0 ? cart.reduce((acc, plantType) => acc + plantType.amount*plantType.price, 0) : 0
    function removeOneItem (name) {
        const newCart = cart.map(plant => plant.name === name ? {...plant, amount: plant.amount - 1} : plant).filter(plant => plant.amount > 0)
        updateCart(newCart)
    }
    useEffect(() => {
        document.title = `J'aurai ${total}€ à payer 💸`
    }, [total])
    return isOpen || cart.length > 0 ? (
        <div className="lmj-cart">
            <button onClick={() => setIsOpen(false)} className='lmj-cart-toggle-button'>Fermer</button>
            <h3>Panier</h3>
            <ul>
                {cart.map(({name, price, amount}, index) => <li key={`${name}-${index}`}>{name} - {price} x {amount} <button className='lmj-delete-item-button' onClick={() => removeOneItem(name)}>-</button></li>)}
            </ul>
            <p>Total : { total }</p>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart'>
                    <p>Votre panier est vide</p>
                    <button onClick={() => setIsOpen(true)} className='lmj-cart-toggle-button'>Ouvrir</button>
        </div>
    )
}
export default Cart
