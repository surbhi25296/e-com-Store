import { createContext, useReducer, useContext } from "react";
import reducer from '../reducer/cartReducer';
import { useEffect } from "react";

const CartContext = createContext();

const getLocalCartData = () =>{
    let localCartData = localStorage.getItem("Storecart");
    if(!localCartData == []){
        return [];
    }else{
        return JSON.parse(localCartData);
    }
}
const intialState = {
//   cart: [],
  cart: getLocalCartData(),  
  total_item: "",
  total_price: "",
  shipping_fee: 500,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const setDecrese = (id) =>{
        dispatch({type: "SET_DECREMENT", payload: id})
  }
  const setIncrese = (id) =>{
    dispatch({type: "SET_INCREMENT", payload: id})
  }

  const removeItem = (id) =>{
    dispatch({type: "REMOVE_ITEM", payload: id})
  }

// to clear cart
  const clearCart = () => {
    dispatch({type:"CLEAR_CART"})
  }

// add the data to locatstorage
  useEffect(()=>{
    // dispatch({type: "CART_TOTAL_ITEMS"});
    // dispatch({type: "CART_TOTAL_PRICE"});
    dispatch({type:"CART_ITEM_PRICE_TOTAL"})

    localStorage.setItem("Storecart", JSON.stringify(state.cart));
  },[state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart,setDecrese,setIncrese}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = ()=>{
    return useContext(CartContext);
};

export { CartProvider ,useCartContext};
