const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
        let updatedProduct = state.cart.map((curEle)=>{
            if(curEle.id === id+color){
                let newAmount = curEle.amount + amount;

                if(newAmount >= curEle.max){
                    newAmount = curEle.max;
                }

                return{
                    ...curEle,
                    amount: newAmount,
                }
            }else{
                return curEle;
            }
        });
        return {
            ...state,
            cart:updatedProduct,
          };

    } else {
      let cartProduct;

      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

if(action.type ===  "SET_DECREMENT"){
    let updatedProduct = state.cart.map((curEle)=>{
        if(curEle.id === action.payload){
          let decAmount = curEle.amount - 1;

          if(decAmount <= 1){
            decAmount = 1;
          }

          return{
            ...curEle,
            amount : decAmount,
          }
        }else{
            return curEle;
        }
    })
    return {...state, cart: updatedProduct};
}

if(action.type ===  "SET_INCREMENT"){
    let updatedProduct = state.cart.map((curEle)=>{
        if(curEle.id === action.payload){
          let incAmount = curEle.amount + 1;

          if(incAmount >= curEle.max){
            incAmount =curEle.max;
          }

          return{
            ...curEle,
            amount : incAmount,
          }
        }else{
            return curEle;
        }
    })
    return {...state, cart: updatedProduct};
}

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

if(action.type === "CART_TOTAL_ITEMS"){
    let updatedItemVal = state.cart.reduce((initialVal, curEle)=>{
        let {amount} = curEle;

        initialVal = initialVal + amount;
        return initialVal;
    },0)
    return{
        ...state,
        total_item:updatedItemVal,
    }
}

if(action.type === "CART_TOTAL_PRICE"){
    let total_price = state.cart.reduce((initialVal,curEle)=>{
        let {price, amount} = curEle;

        initialVal = initialVal + (price * amount);
        return initialVal;
    },0);
    return{
        ...state,
        total_price,
    }
}


if(action.type === "CART_ITEM_PRICE_TOTAL"){
    let {total_item, total_price} = state.cart.reduce((accum, curEle)=>{
        let {price, amount} = curEle;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
    },{
        total_item: 0,
        total_price: 0,
    })
    return{
        ...state,
        total_item,
        total_price,
    }
}

  return state;
};

export default cartReducer;
