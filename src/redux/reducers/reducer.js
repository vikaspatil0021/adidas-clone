export const cartreducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "UPDATE_CART":
            return {
                ...state,
                cart: state.cart.map((each)=>{
                    if(each.productId===action.payload.productId){
                        return {
                            ...each,
                            quantity:action.payload.quantity
                        }
                    }else{
                        return each;
                    }
                })
            }
        case 'REMOVE_CART':
            return {
                ...state,
                cart: state.cart.filter(each=>each.productId!=action.payload.productId)
            }
            
            
            default:
                return state;
            }
}