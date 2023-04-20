export const ADD_TO_CART = (item)=>{
    return {
        type:'ADD_CART',
        payload:item
    }
}

export const REMOVE_FROM_CART = (item)=>{
    return {
        type:'REMOVE_CART',
        payload:item
    }
}