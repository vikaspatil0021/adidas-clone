// recently viewed item ===rvItem
const iniState = {
    cart: [],
    rvItem:[],
    wlcount:0
}

export const cartreducer = (state = iniState.cart, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return [...state, action.payload]
            
        case "UPDATE_CART":
            return state.map((each) => {
                    if (each.productId === action.payload.productId) {
                        return {
                            ...each,
                            quantity: action.payload.quantity
                        }
                    } else {
                        return each;
                    }
                })
            
        case 'REMOVE_CART':
            return state.filter(each => each.productId != action.payload.productId)
            
        case 'EMPTY_CART':
            return []
        default:
            return state;
    }
}

export const rvitemreducer = (state = iniState.rvItem, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state.filter((each)=>{
                    if (each.productId !== action.payload.productId) {
                        return each;
                    }
                }),action.payload]
            
    
        default:
            return state;
    }
}

export const wlcountreducer = (state = iniState.wlcount, action) => {
    switch (action.type) {
        case "CHANGE":
            return Math.random();
            
    
        default:
            return state;
    }
}