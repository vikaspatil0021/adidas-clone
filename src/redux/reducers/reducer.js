export const cartreducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
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