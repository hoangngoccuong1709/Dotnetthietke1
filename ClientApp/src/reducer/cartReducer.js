import Cart from '../pages/cart/Cart';
import * as actionTypes from './types'

const INITAL_STATE ={
    cart:[],
    numberCart:0,
    _products:[]

  //  currentItem:null
}
const cartReducer =(state =INITAL_STATE,action) =>{
    console.log("dda",cartReducer.prototype)
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
      const productInCart = state.cart.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        return {
          cart: [...state.cart, action.payload],
        };
      } else {
        let newcart = state.cart;
        const objIndex = newcart.findIndex(
          (obj) => obj.id == action.payload.id
        );
        if (newcart[objIndex].quantity === undefined) {
          newcart[objIndex].quantity = 2;
        } else {
          newcart[objIndex].quantity = newcart[objIndex].quantity + 1;
        }

        return { cartAr: [...newcart] };
      }
        case actionTypes.REMOVE_FORM_CART:
          let newcart = state.cart;
          const objIndex = newcart.findIndex((obj) => obj.id == action.payload.id);
          newcart.splice(objIndex, 1);
          console.log(">>newcart", newcart);
          return { cart: [...newcart], totalprice: 0 };
        case actionTypes.INCREASE_QUANTITY:
          state.numberCart++
          state.cart[action.payload].quantity++;      
         return{
             ...state
    }
    case actionTypes.DECREASE_QUANTITY:
      let quantity = state.cart[action.payload].quantity;
      if(quantity>1){
          state.numberCart--;
          state.cart[action.payload].quantity--;
      }
     
      return{
          ...state
      }


        default:
            return state;
    }
};
// const CartReducer = combineReducers({
//   _todoProduct:todoProduct
// });

export default cartReducer