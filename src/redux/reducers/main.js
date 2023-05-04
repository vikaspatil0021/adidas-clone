import {combineReducers} from "redux";

import { cartreducer, rvitemreducer, wlcountreducer } from "./reducer";

const rootReducer = combineReducers({
    cart:cartreducer,
    recentViewedItems:rvitemreducer,
    wlcount:wlcountreducer
})

export default rootReducer