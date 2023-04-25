import {combineReducers} from "redux";

import { cartreducer, rvitemreducer } from "./reducer";

const rootReducer = combineReducers({
    cart:cartreducer,
    recentViewedItems:rvitemreducer
})

export default rootReducer