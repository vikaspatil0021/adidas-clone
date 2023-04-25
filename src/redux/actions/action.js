// cart actions

export const ADD_TO_CART = (item)=>{
    return {
        type:'ADD_CART',
        payload:item
    }
}
export const UPDATE_CART = (item)=>{
    return {
        type:'UPDATE_CART',
        payload:item
    }
}
export const REMOVE_FROM_CART = (item)=>{
    return {
        type:'REMOVE_CART',
        payload:item
    }
}


// recently viewed items

export const ADD_ITEM = (item)=>{
    return {
        type:'ADD_ITEM',
        payload:item
    }
}