import React from 'react'
import FormatePrice from '../Helper/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

const CartItem = ({id, name, image, color, price, amount}) => {
    const {removeItem, setDecrese, setIncrese} = useCartContext();
  
//     const setDecrese = () =>{
//         // amount > 1 ? setAmount(amount - 1) : setAmount(1);
//   }
//   const setIncrese =  () =>{
//     // amount < stock ? setAmount(amount+1) : setAmount(stock);
//   }

  return (
    <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className='color-div'>
                    <p>color :</p>
                    <div className='color-style' style={{backgroundColor: color, color: color}}></div>
                </div>
            </div>
        </div>

        <div className="cart-hide">
            <p><FormatePrice price={price}/></p>
        </div>
{/* 
    Quantity */}
        <CartAmountToggle
        amount={amount}
        setDecrese={() => setDecrese(id)}
        setIncrese= {() => setIncrese(id)}
        />


        {/* subtotal */}
        <div className="cart-hide">
            <p><FormatePrice price={price * amount}/></p>
        </div>

        {/* remove */}

        <div>
            <FaTrash  className='remove_icon' onClick={()=> removeItem(id)}/>
        </div>
    </div>
  )
}

export default CartItem