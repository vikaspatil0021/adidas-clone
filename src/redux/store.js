import { createStore} from "redux";
import rootReducer from "./reducers/main";

const persistedState =  window.localStorage.getItem('store');

const store = createStore(rootReducer, JSON.parse(persistedState) || undefined)
store.subscribe(() => window.localStorage.setItem("store",JSON.stringify(store.getState())));
export default store;

