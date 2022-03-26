export const initialState = {
  basket: [],
  user:null
};

//  Selector

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      {
        /*
        this is BAD approach because it will remove all the similar items from
        the basket
        return{
          ...state,
          basket:state.basket.filter(item=>item.id !== action.id)
        }
      
      */
      }

      
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.basket];
      
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          ` cant remove product (id:${action.payload.id}) as its not in basket`
        );
      }

      return{
        ...state,
        basket:newBasket,

      }
      case "SET_USER":
        return{
          ...state,
          user:action.user,
        }
    default:
      return state;
  }
};

export default reducer;
